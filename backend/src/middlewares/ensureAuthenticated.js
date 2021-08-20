const { verify } = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {

    const decoded = verify(token, authConfig.jwt.secret);

    console.log(decoded);

    request.userId = decoded.sub;

    return next();

  } catch {

    throw new Error('Invalid JWT token');
  }
};
