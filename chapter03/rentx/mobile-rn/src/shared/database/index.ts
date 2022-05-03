import { UserSchema } from './models/users/UserSchema';
import { appSchema } from '@nozbe/watermelondb/Schema';

import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { User } from './models/users/User';
import Database from '@nozbe/watermelondb/Database';

const schemas = appSchema({
  version: 2,
  tables: [UserSchema],
});

const adapter = new SQLiteAdapter({
  schema: schemas,
});

export const database = new Database({
  adapter,
  modelClasses: [User],
});
