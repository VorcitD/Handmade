const express =  require('express');
const PhotosController = require('../controllers/PhotosController');

const userRouter = express.Router();

userRouter.get('/:id_clothes', PhotosController.index);//buscar todas fotos de uma roupa
userRouter.post('/:id_clothes', PhotosController.create);//criar foto em uma roupa
userRouter.put('/:id', PhotosController.update);
userRouter.delete('/:id', PhotosController.delete);

module.exports = userRouter;