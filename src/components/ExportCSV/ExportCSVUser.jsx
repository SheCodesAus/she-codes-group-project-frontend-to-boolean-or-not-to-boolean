//components
import React, { Component } from 'react';
import { CSVLink } from "react-csv";

//styles
import "./ExportCSV.css"

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
    const res = await fetch('https://shielded-wildwood-05412.herokuapp.com/users/');
    return await res.json();
  }
  
  
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
      <div className="csv-data">
        <input 
        className="btn" 
        type="button" 
        value="Users" 
        onClick={this.downloadReport} />
        <CSVLink
          headers={headers}
          filename="user_data.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default AsyncCSVUser;