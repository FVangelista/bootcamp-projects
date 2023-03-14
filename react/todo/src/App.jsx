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

  function toggleComplete(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        return updatedItem;
      }
      return item;
    });

    setList(newList);
  }

  function updateItem(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          content: newTodo,
        };
        return updatedItem;
      }
      return item;
    });

    setList(newList);
  }

  return (
    <div className="App">
      <Controllers
        newItem={newTodo}
        setNewItem={setNewTodo}
        addItem={addItem}
      />
      <List
        arrayItems={list}
        deleteItemFunc={deleteItem}
        toggleCompleteFunc={toggleComplete}
        updateItemFunc={updateItem}
      />
    </div>
  );
}

// Components

function Controllers(props) {
  const { newItem, setNewItem, addItem, updateTodo, updateItemFunc } = props;

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
  const { arrayItems, deleteItemFunc, toggleCompleteFunc, updateItemFunc } =
    props;

  return (
    <ul>
      {arrayItems
        .sort((item1, item2) => (item1.id <= item2.id ? 1 : -1))
        .map((item) => (
          <ListContent
            singleItem={item}
            delItem={deleteItemFunc}
            toggleItem={toggleCompleteFunc}
            upItem={updateItemFunc}
            key={item.id}
          />
        ))}
    </ul>
  );
}

function ListContent({ singleItem, delItem, toggleItem, upItem }) {
  return (
    <li>
      <p style={{ textDecoration: singleItem.isComplete && 'line-through' }}>
        {singleItem.content}
      </p>
      <div className="btns">
        <button type="submit" onClick={() => delItem(singleItem.id)}>
          ❌
        </button>
        <button type="submit" onClick={() => upItem(singleItem.id)}>
          ⬆️
        </button>
        <button type="submit" onClick={() => toggleItem(singleItem.id)}>
          {singleItem.isComplete ? '✅' : '⭕'}
        </button>
      </div>
    </li>
  );
}

export default App;
