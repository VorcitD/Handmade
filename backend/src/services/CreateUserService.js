const { hash } = require('bcryptjs');
const connection = require('../database/connection');

module.exports = {

  async execute({
    email, password, name, phone,
  }) {
    const checkUserExists = await connection('users').where({ email }).first();

    if (checkUserExists) {
      throw new Error('Email already used.');
    }

    const hashedPassword = await hash(password, 8);

    await connection('users').insert({
      email,
      password: hashedPassword,
      name,
      phone,
    }, '*').then((user) => {
      console.log(user);
      return user;
    });
  },

};
