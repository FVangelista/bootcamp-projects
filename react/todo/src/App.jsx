import { useState } from 'react';

// Root

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [items, setItems] = useState([]);

  // Utils

  function addItem() {
    if (!newTodo) {
      return alert('Insert an item');
    }

    const item = {
      id: Math.round(Math.random() * 10000),
      value: newTodo,
    };

    setItems((oldList) => [...oldList, item]);
    setNewTodo('');

    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);

    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Controllers
        newItem={newTodo}
        setNewItem={setNewTodo}
        addItem={addItem}
      />
      <List arrayItems={items} deleteItemFunc={deleteItem} />
    </div>
  );
}

// Components

function Controllers(props) {
  const { newItem, setNewItem, addItem } = props;

  return (
    <div className="Controllers">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter Todo:"
      />
      <button className="btn-send" onClick={() => addItem()}>
        enter
      </button>
    </div>
  );
}

function List(props) {
  const { arrayItems, deleteItemFunc } = props;
  return (
    <ul>
      {arrayItems.map((item) => (
        <li key={item.id}>
          {item.value}
          <button type="submit" onClick={() => deleteItemFunc(item.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
