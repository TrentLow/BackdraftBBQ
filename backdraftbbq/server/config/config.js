module.exports = {
  "development": {
    "username": "lambda",
    "password": "temppassword123456",
    "database": "backdraft",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
	"username": process.env.DB_USERNAME,
	"password": "AnExamplePassword",
	"database": process.env.DB_NAME,
	"host": process.env.DB_HOST,
	"dialect": "mysql",
	"logging": false
  }
}
