const express = require('express');
const ClothesController = require('../controllers/ClothesController');

const userRouter = express.Router();

userRouter.get('/', ClothesController.index);
userRouter.post('/', ClothesController.create);
userRouter.put('/:id', ClothesController.update);
userRouter.delete('/:id', ClothesController.delete);

module.exports = userRouter;