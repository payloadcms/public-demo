import payload from 'payload';
import { User } from '../src/payload-types';
import { MongoClient } from 'mongodb';

require('dotenv').config();

const { PAYLOAD_SECRET_KEY, MONGO_URL } = process.env;

(async () => {
  try {
    payload.init({
      secret: PAYLOAD_SECRET_KEY,
      mongoURL: MONGO_URL,
      local: true,
    });
    await dropDB();
    await createFirstUser();
    process.exit(0);
  } catch (error) {
    console.error('Error running script', error);
    process.exit(1);
  }
})();

async function dropDB() {
  const client = await MongoClient.connect(MONGO_URL);
  const db = client.db(new URL(MONGO_URL).pathname.substring(1));
  console.log('Dropping database...');
  await db.dropDatabase();
}

async function createFirstUser() {
  console.log('Creating first user...');
  await payload.create<User>({
    collection: 'users',
    data: {
      name: 'John',
      email: 'yas@yo.com',
      password: 'asdf',
    },
  });
}
