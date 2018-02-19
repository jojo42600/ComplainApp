import React from 'react';
import ReactDOM from 'react-dom';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: '',
      complaint: '',
      age: '',
      entries: []
    };

    this.aliasChange = this.aliasChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.complaintChange = this.complaintChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    aliasChange(event) {
    this.setState({alias: event.target.value});
    console.log(this.state.alias +'   --alias')
  }
    complaintChange(event) {
    this.setState({complaint: event.target.value});
  }
    ageChange(event) {
    this.setState({age: event.target.value});
  }

  handleSubmit(event) {

//    alert('Complaint received, have a nice day!');
    entries.push([this.state.alias,this.state.complaint,this.state.age])
    console.log(this.state.alias +this.state.complaint +this.state.age + "submitted")

  }

  render() {
    return (
      <div className="center">
      <form>
      <ul>
        <label>
          Name:
          <input name="alias" type= "text" value={this.state.alias} onChange={this.aliasChange} />
        </label>
        <label>
          Age:
          <input name="age" type= "number" value={this.state.age} onChange={this.ageChange} />
        </label>
        <label>

        Complaint:
          <textarea value={this.state.complaint} onChange={this.complaintChange} />
        </label>
        <input type="submit" value="Submit" />
      </ul>
      </form>
      </div>
    );
  }
}


// submit button needs to send data to the server
// save data to the database.
//how does mongo save info
//async request
export default NewMessage;