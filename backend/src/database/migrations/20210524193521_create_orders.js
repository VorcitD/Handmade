
exports.up = function(knex) {
    return knex.schema.createTable('orders',function(table){
        table.increments('id');
        table.string('status').notNullable();
        table.string('payment').notNullable();
        table.string('road').notNullable();
        table.string('road').notNullable();
        table.string('road').notNullable();
        table.string('road').notNullable();
        table.string('road').notNullable();
        table.string('road').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('id_users').notNullable();
        table.foreign('id_users').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};