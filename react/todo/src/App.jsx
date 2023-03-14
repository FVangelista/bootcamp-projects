import { useState } from 'react';

import { todoList } from './mock/todoList';

// Root

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [list, setList] = useState(todoList);

  // Utils

  function addItem() {
    if (!newTodo) {
      return alert('Insert an item');
    }

    const item = {
      id: list.length + 1,
      content: newTodo,
    };

    setList((prev) => {
      if (prev.find((item) => item.content === newTodo)) {
        alert('The item has already been added');
        return prev;
      } else {
        return [...prev, item];
      }
    });

    setNewTodo('');
    console.log(list);
  }

  function deleteItem(id) {
    console.log(list);
    const newArray = list.filter((item) => item.id !== id);

    setList(newArray);
  }

  return (
    <div className="App">
      <Controllers
        newItem={newTodo}
        setNewItem={setNewTodo}
        addItem={addItem}
      />
      <List arrayItems={list} deleteItemFunc={deleteItem} />
    </div>
  );
}

// Components

function Controllers(props) {
  const { newItem, setNewItem, addItem } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="Controllers">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter Todo:"
      />
      <button className="btn-send" onClick={() => addItem()}>
        enter
      </button>
    </form>
  );
}

function List(props) {
  const { arrayItems, deleteItemFunc } = props;

  return (
    <ul>
      {arrayItems
        .sort((item1, item2) => (item1.id <= item2.id ? 1 : -1))
        .map((item) => (
          <ListContent
            singleItem={item}
            delItem={deleteItemFunc}
            key={item.id}
          />
        ))}
    </ul>
  );
}

function ListContent({ singleItem, delItem }) {
  return (
    <li>
      <p>{singleItem.content}</p>
      <button type="submit" onClick={() => delItem(singleItem.id)}>
        ❌
      </button>
    </li>
  );
}

export default App;
