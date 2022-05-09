import dotenv from 'dotenv-safe';
dotenv.config();

export default {
  isDev: process.env.NODE_ENV === 'development',
  database: {
    dbUrl: process.env.DB_URL || '',
  },
  server: {
    port: process.env.PORT || '3000',
    domainUrl: process.env.DOMAIN_URL || '',
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT as number | undefined,
  },
};
