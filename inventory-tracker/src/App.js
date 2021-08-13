import './App.css';
import SearchBar  from './SearchBar';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDisplay';
import {useState} from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []});

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]}></ItemsDisplay>
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters}></SearchBar>
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData}></AddItem>
      </div>
    </div>
  );
}


export default App;
