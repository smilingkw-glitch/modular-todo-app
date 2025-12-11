import { displayTodos } from './displayTodos.js';

export async function fetchAndDisplayTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    displayTodos(todos.slice(0, 20));
  } catch (error) {
    console.error('Error fetching todos:', error);
    document.getElementById('todos-container').innerHTML = '<p>Error loading todos</p>';
  }
}
