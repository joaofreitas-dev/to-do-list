const todolistService = require('../services/todolistService');

const findTodolistController = (req, res) => {
  const allItems = todolistService.findTodolistService();
  res.send(allItems);
};

const findTodolistByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenItems = todolistService.findTodolistByIdController(idParam);
  res.send(chosenItems);
};

const createTodolistController = (req, res) => {
  const item = req.body;
  const newItem = todolistService.createTodolistService(item);
  res.send(newItem);
};

const updateTodolistController = (req, res) => {
  const idParam = Number(req.params.id);
  const itemEdit = req.body;
  const updateItem = todolistService.updateTodolistService(idParam, itemEdit);
  res.send(updateItem);
};

const deleteTodolistController = (req, res) => {
  const idParam = req.params.id;
  todolistService.deleteTodolistService(idParam);
  res.send({ message: 'Item deletado com sucesso!' });
};

module.exports = {
  findTodolistController,
  findTodolistByIdController,
  createTodolistController,
  updateTodolistController,
  deleteTodolistController,
};
