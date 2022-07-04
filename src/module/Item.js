const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  duracao: {
    type: String,
    require: true,
  },
});

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;
