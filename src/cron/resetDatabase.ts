import payload from 'payload';
import { User } from '../payload-types';
import { MongoClient } from 'mongodb';

export async function resetDatabase() {
  try {
    payload.logger.info(`Resetting database...`);
    await dropDB();
    await createFirstUser();
    payload.logger.info(`Reset Complete.`);
  } catch (error) {
    payload.logger.error('Error resetting database.', error);
  }
}

async function dropDB() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db(new URL(process.env.MONGO_URL).pathname.substring(1));
  await db.dropDatabase();
}

async function createFirstUser() {
  await payload.create<User>({
    collection: 'users',
    data: {
      name: 'Dev',
      email: 'test@test.com',
      password: 'test123',
    },
  });
}
