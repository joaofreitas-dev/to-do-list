const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id inválido!' });
    }
    next();
  };

  const validObjectBody = (req, res, next) => {
    const item = req.body;
    if (
      !item.tarefa ||
      !item.descricao ||
      !item.duracao
    ) {
      return res
        .status(400)
        .send({ message: 'Você não preencheu todos os campos corretamente. Reveja os valores digitados.' });
    }
    next();
  };
  
  module.exports = {
    validId,
    validObjectBody,
  };
