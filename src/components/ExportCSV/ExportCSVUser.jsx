//components
import React, { Component } from 'react';
import { CSVLink } from "react-csv";

//headers for user data that will be exported
const headers = [
    { label: "id", key: "id" },
    { label: "username", key: "username" },
    { label: "first_name", key: "first_name" },
    { label: "last_name", key: "last_name" },
    { label: "email", key: "email" },
    { label: "avatar", key: "avatar" },
    { label: "bio", key: "bio" },
    { label: "social_link", key: "social_link" }
];

class AsyncCSVUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }

  getUserList = async () => {
    // need to confirm correct link for this and if I need to configure DRF
    const res = await fetch('https://shielded-wildwood-05412.herokuapp.com/users/');
    return await res.json();
  }

  // fetch => {

  
  
  downloadReport = async () => {
    const data = await this.getUserList();
    this.setState({ data: data }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <input 
        className="btn" 
        type="button" 
        value="Download users" 
        onClick={this.downloadReport} />
        <CSVLink
          headers={headers}
          filename="Clue_Mediator_Report_Async.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default AsyncCSVUser;