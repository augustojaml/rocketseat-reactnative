import { userSchema } from './userSchema';
import { appSchema } from '@nozbe/watermelondb';
import { carsSchema } from './carsSchema';

export const schemas = appSchema({
  version: 2,
  tables: [userSchema, carsSchema],
});
