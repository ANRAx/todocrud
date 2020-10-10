const db = require('../models/todosModels');
const todoController = {};

todoController.getTodos = async (req, res, next) => {
  const query = `SELECT * FROM todos`;
  const todos = await db.query(query);
  res.locals.todos = todos.rows;
  return next();
};

todoController.addTodo = async (req, res, next) => {
  const { title, description } = req.body;
  const query = `INSERT INTO todos values ($1, $2, $3)`;
  await db.query(query, [, title, description, 1]);
  return next();
};

// req.params is referencing the query string on line 24 server.js
todoController.deleteTodo = async (req, res, next) => {
  const todoId = req.params.id;
  console.log('req.params: ', req.params);
  console.log('todoid: ', todoId);
  const query = 'DELETE FROM todos WHERE todos.id = $1';
  await db.query(query, [todoId]);
  return next();
};

todoController.populatedb = async (req, res, next) => {
  const query = `INSERT INTO todos 
  VALUES
  (8, 'TEST3', 'TEST3', 1),
  (9, 'TEST3', 'TEST3', 1),
  (10, 'TEST3', 'TEST3', 1),
  (11, 'TEST3', 'TEST3', 1)`;
  await db.query(query, [todoId]);
  return next();
};

module.exports = todoController;
