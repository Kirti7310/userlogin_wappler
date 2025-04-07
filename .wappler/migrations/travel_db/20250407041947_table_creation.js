
exports.up = function(knex) {
  return knex.schema
    .createTable('users', async function (table) {
      table.increments('user_id');
    })
    .createTable('roles', async function (table) {
      table.increments('roles_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('roles')
    .dropTable('users')
};
