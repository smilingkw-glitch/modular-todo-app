export function displayTodos(todos) {
  const container = document.getElementById('todos-container');
  container.innerHTML = '';
  if (todos.length === 0) {
    container.innerHTML = '<p>No todos found</p>';
    return;
  }
  const ul = document.createElement('ul');
  ul.className = 'todos-list';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <span>${todo.id}. ${todo.title}</span>
      <span class="status">${todo.completed ? '✓' : '○'}</span>
    `;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}
