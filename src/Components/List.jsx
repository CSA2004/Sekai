function List({ items, renderItem, emptyMessage = "No items found" }) {
    if (!items.length) return <p>{emptyMessage}</p>

    return (
        <ul>
            {items.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
            ))}
        </ul>
    )
}

export default List