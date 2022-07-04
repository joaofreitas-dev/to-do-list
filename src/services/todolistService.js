/* const items = [
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
 */

const Item = require('../module/Item');
const Items = require('../module/Item')


const findTodolistService = async () => {
  const items = await Items.find();
  return items;
};

const findTodolistByIdController = async (id) => {
  const item = await Items.findById(id);
  return item;
};

const createTodolistService = async (newItem) => {
  const itemAdd = await Item.create(newItem)
  return itemAdd;
};

const updateTodolistService = async (id, itemEdited) => {
  const itemUpdated = await Item.findByIdAndUpdate(id, itemEdited)
  return itemUpdated;
};

const deleteTodolistService = async (id) => {
  return await Item.findByIdAndDelete(id)
};

module.exports = {
  findTodolistService,
  findTodolistByIdController,
  createTodolistService,
  updateTodolistService,
  deleteTodolistService,
};
