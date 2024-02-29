import List from './List'

function App() {

  const Fruits = [
    {id: 1, name: "Apple", price: 100},
    {id : 2, name: "Banana", price: 200},
    {id : 3, name: "Orange", price: 300}
  ]

  const vegetables = [
    {id : 4, name: "Potato", price: 100},
    {id : 5, name: "Carrot", price: 200},
    {id : 6, name: "Cucumber", price: 300}
  ]

  return (
    <>
      <List category = "Fruits" items = {Fruits}/>
      <List category = "Vegetables" items = {vegetables}/>
    </>
  );

}

export default App
