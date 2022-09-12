export const optionsMariaDB = {
  db: {
    client: "mysql",
    //version: "8.0",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "1234",
      database: "ecommerce",
    },
    pool: { min: 0, max: 7 },
  },
};
