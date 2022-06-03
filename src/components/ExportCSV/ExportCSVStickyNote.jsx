//components
import React, { Component } from 'react';
import { CSVLink } from "react-csv";

//headers for sticky note data that will be exported
const headers = [
    { label: "id", key: "id" },
    { label: "win_comment", key: "win_comment" },
    { label: "guest", key: "guest" },
    { label: "owner", key: "owner" },
    { label: "owner_name", key: "owner_name" },
    { label: "is_approved", key: "is_approved" },
    { label: "is_archived", key: "is_archived" },
    { label: "win_wall_id", key: "win_wall_id" }
];

class AsyncCSVStickyNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
      this.csvLinkEl = React.createRef();
    }
  
    getUserList = async () => {
      const res = await fetch('https://shielded-wildwood-05412.herokuapp.com/sticky-note/');
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
          value="Sticky Notes" 
          onClick={this.downloadReport} />
          <CSVLink
            headers={headers}
            filename="sticky_note_data.csv"
            data={data}
            ref={this.csvLinkEl}
          />
        </div>
      );
    }
  }
  
  export default AsyncCSVStickyNote;