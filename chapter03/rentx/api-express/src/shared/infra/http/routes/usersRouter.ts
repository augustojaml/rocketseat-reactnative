import { StorageFilesSupport } from '@shared/supports/StorageFilesSupport';
import { Router } from 'express';
import multer from 'multer';

import { AuthUsersController } from '../controllers/users/AuthUsersController';
import { CreateUsersController } from '../controllers/users/CreateUsersController';
import { ShowLoggedUsersController } from '../controllers/users/ShowLoggedUsersController';
import { UpdateAvatarController } from '../controllers/users/UpdateAvatarController';
import { UpdateUsersController } from '../controllers/users/UpdateUsersController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

export const usersRouter = Router();
const upload = multer(StorageFilesSupport.upload(`${StorageFilesSupport.paths.storage}/avatar`));

const createUsersUseCase = new CreateUsersController();
const authUsersController = new AuthUsersController();
const showLoggedUsersController = new ShowLoggedUsersController();
const updateUsersController = new UpdateUsersController();
const updateAvatarController = new UpdateAvatarController();

usersRouter.post('/create', createUsersUseCase.handle);
usersRouter.post('/auth', authUsersController.handle);
usersRouter.get('/me', EnsureAuthenticated.user, showLoggedUsersController.handle);
usersRouter.put('/update', EnsureAuthenticated.user, updateUsersController.handle);

usersRouter.patch(
  '/avatar',
  EnsureAuthenticated.user,
  upload.single('avatar'),
  updateAvatarController.handle
);
