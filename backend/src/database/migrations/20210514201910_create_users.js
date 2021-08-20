
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
