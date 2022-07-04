const todolistService = require('../services/todolistService');

const mongoose = require('mongoose');

const findTodolistController = async (req, res) => {
  const allItems = await todolistService.findTodolistService();
  res.send(allItems);
};

const findTodolistByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenItems = await todolistService.findTodolistByIdController(idParam);

  res.send(chosenItems);
};

const createTodolistController = async (req, res) => {
  const item = req.body;

  const newItem = await todolistService.createTodolistService(item);
  res.status(201).send(newItem);
};

const updateTodolistController = async (req, res) => {
  const idParam = req.params.id;
  const itemEdit = req.body;

  const updatedItem = await todolistService.updateTodolistService(
    idParam,
    itemEdit,
  );

  res.send(updatedItem);
};

const deleteTodolistController = async (req, res) => {
  const idParam = req.params.id;

  await todolistService.deleteTodolistService(idParam);

  res.send({ message: 'Item deletado com sucesso!' });
};

module.exports = {
  findTodolistController,
  findTodolistByIdController,
  createTodolistController,
  updateTodolistController,
  deleteTodolistController,
};
