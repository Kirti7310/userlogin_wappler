
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.string('roles_name', 10);
    })
    .table('users', async function (table) {
      table.string('username', 20);
      table.string('email', 20);
      table.string('password', 255);
      table.integer('role_id').unsigned();
      table.foreign('role_id').references('roles_id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('username');
      table.dropColumn('email');
      table.dropColumn('password');
      table.dropForeign('role_id');
      table.dropColumn('role_id');
    })
    .table('roles', async function (table) {
      table.dropColumn('roles_name');
    })
};
