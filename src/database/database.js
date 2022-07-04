const mongoose = require('mongoose');

function connectedToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/todolist-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB CONNECTED!');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}


module.exports = connectedToDatabase;
