import React from 'react';
import ReactDOM from 'react-dom';

class newMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Enter complaint here.'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Complaint received, have a nice day =)!';
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Complaint:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <button onCLick={console.log("button clicked")}
      </form>
    );
  }
}



