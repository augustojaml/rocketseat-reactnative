import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schemas } from './schema';
import { User } from './models/User';

const sqliteAdapter = new SQLiteAdapter({
  schema: schemas,
});

const database = new Database({
  adapter: sqliteAdapter,
  modelClasses: [User],
});

export { database };
