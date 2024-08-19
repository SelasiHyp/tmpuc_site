// ItemList.js
import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() && items.length < 4) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
