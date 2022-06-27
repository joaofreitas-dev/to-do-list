const items = [
  {
    id: 1,
    tarefa: 'Estudar',
    descricao:
      'Nulla sit amet urna id mi egestas fringilla. Duis ut faucibus felis, in malesuada velit. Nam sit amet lacus et enim tempor luctus vel in mauris.',
    duracao: '2 horas',
  },

  {
    id: 2,
    tarefa: 'Jogar video game',
    descricao:
      'Nulla sit amet urna id mi egestas fringilla. Duis ut faucibus felis, in malesuada velit. Nam sit amet lacus et enim tempor luctus vel in mauris.',
    duracao: '2 horas',
  },

  {
    id: 3,
    tarefa: 'Caminhar',
    descricao:
      'Nulla sit amet urna id mi egestas fringilla. Duis ut faucibus felis, in malesuada velit. Nam sit amet lacus et enim tempor luctus vel in mauris.',
    duracao: '1 hora e 30 minutos',
  },
];

const findTodolistService = () => {
  return items;
};

const findTodolistByIdController = (id) => {
  return items.find((item) => item.id == id);
};

const createTodolistService = (newItem) => {
  const newId = items.length + 1;
  newItem.id = newId;
  items.push(newItem);
  return newItem;
};

const updateTodolistService = (id, itemEdited) => {
  itemEdited['id'] = id;
  const itemIndex = items.findIndex((item) => item.id == id);
  items[itemIndex] = itemEdited;
  return itemEdited;
};

const deleteTodolistService = (id) => {
  const itemIndex = items.findIndex((item) => item.id == id);
  return items.splice(itemIndex, 1);
};

module.exports = {
  findTodolistService,
  findTodolistByIdController,
  createTodolistService,
  updateTodolistService,
  deleteTodolistService,
};
