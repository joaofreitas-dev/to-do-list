const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../middlewares/itemMiddleware');

const todolistController = require('../controllers/todolistController');

router.get('/find-items', todolistController.findTodolistController);

router.get('/find-items/:id', validId, todolistController.findTodolistByIdController);

router.post('/create', validObjectBody, todolistController.createTodolistController);
router.put('/update/:id', validId, validObjectBody, todolistController.updateTodolistController);
router.delete('/delete/:id', validId, todolistController.deleteTodolistController);

module.exports = router;
