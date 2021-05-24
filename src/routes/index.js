const express = require('express');
const userRouter = require('./users.routes');
const sessionRouter = require('./sessions.routes');
const clothesRouter = require('./clothes.routes');
const photosRouter = require('./photos.routes');

const routes = express.Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/clothes', clothesRouter);
routes.use('/photos',photosRouter);

module.exports = routes;