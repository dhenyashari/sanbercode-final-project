import React from 'react'

function ListItems(props) {
  const items = props.items;
  const eventHandler = props.eventHandler;
  const listItems = items.map((items) =>
    <li key={items.id}><input onChange={eventHandler} type="checkbox" checked={items.isChecked} value={items.value} name="rooms"/> {items.value} </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default ListItems;