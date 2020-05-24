exports.up = function(knex) {
    return knex.schema.createTable('schedule', function(table){
        table.increments();
        table.integer('day').notNullable();
        table.integer('month').notNullable();
        table.integer('year').notNullable();
        table.integer('hour').notNullable();
        table.integer('minute').notNullable();
        table.string('description').notNullable();
        table.string('place').nullable();

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('user');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('schedule');
};