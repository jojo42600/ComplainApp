import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Complain Here! </h4>
    <form onSubmit={this.handleSubmit}>
        <label>
          Alias:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
    <form onSubmit={this.handleSubmit}>
        <label>
          Complaint:
        <input type="text" value={this.state.complaint} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
  </div>
)

export default List;