
exports.up = function(knex) {
    //metodo up é responsável pela criação da tabela
    return knex.schema.createTable('user', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
  //deleta a tabela
  knex.schema.dropTable('user');
};
