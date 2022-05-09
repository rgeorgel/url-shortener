import 'module-alias/register';
import 'reflect-metadata';
import logger from '@app/infrastructure/logger';
import mongoose from 'mongoose';

export async function connectDB () {
  const mongoUrl = process.env.MONGO_URL?.replace('jest', process.env.TEST_SUITE || 'jest');

  mongoose.connect(
    mongoUrl as string,
    (err) => {
      if (err) {
        logger.error(err);
        throw err;
      }
    }
  );
}

export async function clearDB() {
  for (const i in mongoose.connection.collections) {
    mongoose.connection.collections[i].deleteOne(function() {});
  }

  await connectDB();
}

describe('Database tests...', () => {
  it('test', async () => {
    expect(true).toBe(true);
  })
});