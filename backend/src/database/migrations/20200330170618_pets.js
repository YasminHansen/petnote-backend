
exports.up = function(knex) {
  return knex.schema.createTable('pets', function(table){
    table.increments();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.decimal('weight').notNullable();
    table.bool('gender').notNullable();
    table.bool('castrated').notNullable();
    table.string('disease').notNullable();
    table.string('photo_link').nullable();
    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
