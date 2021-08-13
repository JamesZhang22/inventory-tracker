function ItemsDisplay(props) {
    return (
        <div>
            {props.items.map((item) => {return <div>
                <p>ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Type: {item.type}</p>
                <p>Brand: {item.brand}</p>
            </div>})}
        </div>
    )
}

export default ItemsDisplay;