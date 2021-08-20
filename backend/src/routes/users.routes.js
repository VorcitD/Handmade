const express = require('express');
const UserController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.get('/', UserController.index);
userRouter.post('/', UserController.create);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);

module.exports = userRouter;
