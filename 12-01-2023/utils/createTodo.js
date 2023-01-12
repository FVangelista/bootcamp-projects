import todos from './data.js';
import getElement from './getElement.js';
import getAllElements from './getAllElements.js';

const listContainer = getElement('.todo-container');

const createTodo = () => {
  const todoList = getElement('.todos');
  const todoText = todos
    .map((todo) => {
      return `<p class="todo-text">${todo.todo}<button class="check"></button></p>`;
    })
    .join('');

  todoList.innerHTML = todoText;
  listContainer.appendChild(todoList);
  const btns = [...getAllElements('button')];
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('checkIn');
    });
  });
};

export default createTodo;
