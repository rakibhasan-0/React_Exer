import React, { useState } from 'react';

function ArrayListChanges() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  const removeElement = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  const addItems = () => {
    let newItem = document.getElementById("addItem").value;
    document.getElementById("addItem").value = "";
    setItems([...items, newItem]);
  }

  return (
    <div>
      <h1>My Favorite Fruits</h1>
      <ul>
        {items.map( (item, index) => (
          <li key={index} onClick={() => removeElement(index)}>
            {item}
          </li>
        ))}
      </ul>

      <input type="text" placeholder='Add an item' id ="addItem"/>
      <button onClick ={addItems}>Add</button>
    </div>
  );
}

export default ArrayListChanges;
