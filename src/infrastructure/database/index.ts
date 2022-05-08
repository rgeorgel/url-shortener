import mongoose from 'mongoose';
import config from '@app/config';
import logger from '@app/infrastructure/logger';

export class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      await mongoose.connect(`${config.database.dbUrl}`);

      mongoose.connection.on('error', (err: object) => {
        logger.log('database error: ', err);
      });
    } catch (error) {
      logger.error('database error to connect:', error);
    }
  }
}

export default new Database();
