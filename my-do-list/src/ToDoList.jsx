import React, { useState } from 'react';

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const addToList = () => {
  if (newToDo.trim() === "") {
    return;
  }
  setToDoList([...toDoList, newToDo]);
  setNewToDo(""); 
};

  const removeList = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  };

  const moveUpTheList = (index) => {
    if (index === 0) return;
    const newToDoList = [...toDoList];
    [newToDoList[index], newToDoList[index - 1]] = [newToDoList[index - 1], newToDoList[index]]; 
    setToDoList(newToDoList);
  };

  const moveDownList = (index) => {
    if (index === toDoList.length - 1) return;
    const newToDoList = [...toDoList];
    [newToDoList[index], newToDoList[index + 1]] = [newToDoList[index + 1], newToDoList[index]]; 
    setToDoList(newToDoList);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your task here" 
        value={newToDo} 
        onChange={(e) => setNewToDo(e.target.value)} 
      />
      <input type="button" value="Add" onClick={addToList}/>
      <ul>
        
        {toDoList.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => moveUpTheList(index)}>UP</button>
            <button onClick={() => moveDownList(index)}>DOWN</button>
            <button onClick={() => removeList(index)}>Remove</button>
          </li>
        ))}

      </ul>
    </div>    
  );
}

export default ToDoList;
