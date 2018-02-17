import React from 'react';
import ReactDOM from 'react-dom';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: '',
      complaint: '',
      age: 10
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Complaint received, have a nice day!');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="alias" type= "text" value={this.state.alias} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <input name="age" type= "number" value={this.state.age} onChange={this.handleChange} />
        </label>
        <label>

        Complaint:
          <textarea value={this.state.complaint} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      </form>
    );
  }
}



export default NewMessage;