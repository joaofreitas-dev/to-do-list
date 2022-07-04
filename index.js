const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const routes = require('./src/routes/todolistRoute');
const connectedToDatabase = require('./src/database/database')

app.use(express.json());

connectedToDatabase()

app.use(cors());
app.use('/todolist', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
