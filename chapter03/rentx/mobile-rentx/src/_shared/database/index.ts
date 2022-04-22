import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schemas } from './schema';
import { User } from './models/User';
import { Car } from './models/Car';

const sqliteAdapter = new SQLiteAdapter({
  schema: schemas,
});

const database = new Database({
  adapter: sqliteAdapter,
  modelClasses: [User, Car],
});

export { database };
