module.exports = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT,
  dbAdmin: process.env.DB_ADMIN,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbTest: process.env.DB_NAME_DATABASE,
  oxfordAppId: process.env.OX_APP_ID,
  oxfordAppKeys: process.env.OX_APP_KEYS,
  shuttImagesId: process.env.SHUTTERSTOCK_API_ID,
  shuttImagesSecret: process.env.SHUTTERSTOCK_API_SECRET,
  pixabayKey: process.env.PIXABAY_API_KEY,
  flaticonKey: process.env.FLATICON_API_KEY,
};
