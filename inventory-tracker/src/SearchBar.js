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
        <div className='container'>
            <div className="row">
                <h2>Search for an Item</h2>
            </div>
            <div className="row">
                <div className="col">
                    <lablel htmlFor="name-field">Name:</lablel>
                    <input id="name-field" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="col">
                    <lablel htmlFor="price-field">Max Price:</lablel>
                    <input id="price-field" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="col">
                    <lablel htmlFor="type-field">Type:</lablel>
                    <input id="type-field" type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)}></input>
                </div>
                <div className="col">
                    <lablel htmlFor="brand-field">Brand:</lablel>
                    <input id="brand-field" type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4"></div>
                <button type="button" className="col-4 btn btn-primary" onClick={searchButtonPressed}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;