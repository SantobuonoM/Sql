import { optionsSQLite3 } from "./options/config.js";
import knex from "knex";
export const knexCli = knex(optionsSQLite3.db);

knexCli.schema.dropTableIfExists("messages").then(() => {
  knexCli.schema
    .createTable("messages", (table) => {
      table.increments("id").primary();
      table.string("email").notNullable();
      table.string("message").notNullable();
      table.string("date").notNullable();
    })
    .then(() => console.log("Table Created"))
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knexCli.destroy();
    });
});

