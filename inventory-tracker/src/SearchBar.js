import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.updateSearchParams({name: name, price: price, type: type, brand: brand});
    }

    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <lablel htmlFor="name-field">Name:</lablel>
                <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <lablel htmlFor="price-field">Max Price:</lablel>
                <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <lablel htmlFor="type-field">Type:</lablel>
                <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)}></input>
                <lablel htmlFor="brand-field">Brand:</lablel>
                <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;