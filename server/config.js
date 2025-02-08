import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './.env.dev' });
} else {
  dotenv.config();
}

const config = {
  port: process.env.PORT,
  localHost: process.env.LOCAL_HOST,
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  clientUrl: process.env.CLIENT_URL,
  clientDomain: process.env.CLIENT_DOMAIN,
};

export default config;
