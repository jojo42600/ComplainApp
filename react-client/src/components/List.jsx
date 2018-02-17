import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Complain Here! </h4>
    there are {props.items.length} items.
    {props.items.map(item => <listItem item={item}/>)}

  </div>
)

export default List;


