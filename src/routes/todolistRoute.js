const express = require('express');
const router = express.Router();

const todolistController = require('../controllers/todolistController');

router.get('/find-items', todolistController.findTodolistController);

router.get('/find-items/:id', todolistController.findTodolistByIdController);

router.post('/create', todolistController.createTodolistController);
router.put('/update/:id', todolistController.updateTodolistController);
router.delete('/delete/:id', todolistController.deleteTodolistController);

module.exports = router;
