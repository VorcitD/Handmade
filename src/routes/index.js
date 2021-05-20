const express = require('express');
const userRouter = require('./users.routes');
const sessionRouter = require('./sessions.routes');

const routes = express.Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

module.exports = routes;