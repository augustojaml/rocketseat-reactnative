import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import '@shared/container';

import { router } from '@shared/infra/http/routes';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { StorageFilesSupport } from '@shared/supports/StorageFilesSupport';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(AppError.middleware);
app.use('/avatar', express.static(`${StorageFilesSupport.paths.storage}/avatar`));
app.use('/cars', express.static(`${StorageFilesSupport.paths.storage}/cars`));
