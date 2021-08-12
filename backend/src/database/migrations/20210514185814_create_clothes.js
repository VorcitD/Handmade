
exports.up = function(knex) {
 return knex.schema.createTable('clothes',function(table){
      table.increments('id').notNullable();
      table.string('name').notNullable();
      table.decimal('price').notNullable();
      table.string('description').notNullable();
      table.string('gender');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clothes');
};

