//fetch data for the front end
fetch('/todos')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      appendTodo(el);
    });
  });

const appendTodo = (todo) => {
  const list = document.getElementById('todo-list');
  list.innerHTML += `<li id=todo-${todo.id}> ${todo.title} - ${todo.description} <button onclick=deleteTodo(${todo.id})> X </button></li>`;
};

const deleteTodo = (id) => {
  let el = document.getElementById(`todo-${id}`);
  el.remove();
  fetch(`/todo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const addTodo = () => {
  console.log('add to do!');
  const list = document.getElementById('todo-list');
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  list.innerHTML += `<li id=todo>${title} - ${description} <button> X </button></li>`;
  fetch(`/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      title: title,
      description: description,
    },
  });
};
