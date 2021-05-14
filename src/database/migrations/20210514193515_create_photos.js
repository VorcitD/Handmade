
exports.up = function(knex) {
    return knex.schema.createTable('photos',function(table){
        table.increments('id');
        table.string('source').notNullable();
        table.decimal('id_clothes').notNullable();
        table.foreign('id_clothes').references('id').inTable('clothes');
    })
};

exports.down = function(knex) {
  
};
