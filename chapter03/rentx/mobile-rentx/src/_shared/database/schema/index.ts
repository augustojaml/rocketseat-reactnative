import { userSchema } from './userSchema';
import { appSchema } from '@nozbe/watermelondb';

export const schemas = appSchema({
  version: 1,
  tables: [userSchema],
});
