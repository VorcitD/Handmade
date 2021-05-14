
exports.up = function(knex) {
  knex.schema.createTable('clothes',function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.decimal('price').notNullable();
      table.string('description').notNullable();
      table.string('gender');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clothes');
};
