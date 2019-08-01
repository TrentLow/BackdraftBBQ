module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "backdraft",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: "backdraft",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  }
};
