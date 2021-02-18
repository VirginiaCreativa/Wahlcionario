module.exports = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT,
  dbAdmin: process.env.DB_ADMIN,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbTest: process.env.DB_NAME_DATABASE,
};
