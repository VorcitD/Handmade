const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const connection = require('../database/connection');
const authConfig = require('../config/auth');

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await connection('users').where({ email }).first();

    if (!user) {
      return response.status(400).json({ error: 'Incorrect email/password combination.' });
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return response.status(400).json({ error: 'Incorrect email/password combination.' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    delete user.password;

    return response.json({ user, token });
  },
};
