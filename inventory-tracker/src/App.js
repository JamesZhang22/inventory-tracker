import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      <Info></Info>
      <AddItem></AddItem>
    </div>
  );
}

function AddItem() {
  const value = "itemName"

  return (
    <form>
      <label for="text-from">Type something</label>
      <input type="text" id="text-form" value={value}></input>
    </form>
  )
}

export default App;
