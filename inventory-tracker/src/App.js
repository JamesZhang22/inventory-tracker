import './App.css';
import { PropTypes } from "prop-types";
import Info from "./info.js";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info title="Inventory"></Info>
      <ButtonState></ButtonState>
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title");
  }

  const updateCounterClicked = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Data title={title} count={count}></Data>
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

export default App;
