import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = () => {
        props.addItem({name: name, price: price, type: type, brand: brand});
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Add an Item</h2>
            </div>
            <div className="row">
                <lablel htmlFor="name-field">Name:</lablel>
                <input id="name-field" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}></input>
                <lablel htmlFor="price-field">Price:</lablel>
                <input id="price-field" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <lablel htmlFor="type-field">Type:</lablel>
                <input id="type-field" type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)}></input>
                <lablel htmlFor="brand-field">Brand:</lablel>
                <input id="brand-field" type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
            </div>
            <div className="row mt-3">
                <button type="button" className="btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
            </div>
        </div>
    )
}

export default AddItem;