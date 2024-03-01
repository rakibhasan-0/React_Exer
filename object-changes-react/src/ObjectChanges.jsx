import React, { useState } from 'react';



function ObjectChanges() {

  const [person, setPersonDetails] = useState({
    name: 'John', age: 30, city: 'New York'
  });


  return (
    <div>
        <h1>My Details</h1>
        <p>Name: {person.name} , Age: {person.age} , City: {person.city}</p>
        <label for ="name">Name:</label>
        <input type="text" value={person.name} name = "name" onChange={e => setPersonDetails({...person, name: e.target.value})}/><br/>
        <label for ="age">Age: &nbsp; </label>
        <input type="number" value={person.age} name ="age" onChange={e => setPersonDetails({...person, age: e.target.value})} /><br/>
        <label for ="city">City: &nbsp; </label>
        <input type ="text" value ={person.city} name = "city" onChange = {e => setPersonDetails({...person, city: e.target.value})} /><br/>
    </div>
  )

  
}


export default ObjectChanges;