import React from 'react'

function ListItems(props) {
  const items = props.items;
  const eventHandler = props.eventHandler;
  const listItems = items.map((items) =>
    <li key={items.id}>
      <input type="radio" name="gender" onChange={eventHandler} value={items.value} /> {items.value}
    </li> 
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default ListItems;