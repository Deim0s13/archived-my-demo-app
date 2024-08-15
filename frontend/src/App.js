import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const addItem = () => {
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newItem }),
    })
      .then(response => response.json())
      .then(item => setItems([...items, item]));
    setNewItem('');
  };

  const deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then(() => setItems(items.filter(item => item.id !== id)));
  };

  return (
    <div className="App">
      <h1>Items</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;