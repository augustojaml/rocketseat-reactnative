import { CreatePhotosController } from './../controllers/cars/CratePhotosController';
import { FindAllAccessoriesByCarController } from './../controllers/cars/FindAllAccessoriesByCarController';
import { UpdateCarsController } from './../controllers/cars/UpdateCarsController';
import multer from 'multer';
import { Router } from 'express';

import { StorageFilesSupport } from '@shared/supports/StorageFilesSupport';

import { EnsureAuthenticated } from './../middlewares/EnsureAuthenticated';
import { CreateCarsController } from './../controllers/cars/CreateCarsController';
import { FindAllCarsController } from '../controllers/cars/FindAllCarsController';
import { CreateAccessoriesController } from '../controllers/cars/CreateAccessoriesController';
import { FindPhotosByCarController } from '../controllers/cars/FindPhotosByCarController';

export const carsRouter = Router();

const upload = multer(StorageFilesSupport.upload(`${StorageFilesSupport.paths.storage}/cars`));

const tempUploads = multer(StorageFilesSupport.upload(`${StorageFilesSupport.paths.storage}/temp`));

const createCarsController = new CreateCarsController();
const findAllCarsController = new FindAllCarsController();
const updateCarsController = new UpdateCarsController();

const createAccessoriesController = new CreateAccessoriesController();
const findAllAccessoriesByCarController = new FindAllAccessoriesByCarController();
const createPhotosController = new CreatePhotosController();
const findPhotosByCarController = new FindPhotosByCarController();

carsRouter.post(
  '/create',
  EnsureAuthenticated.user,
  upload.single('thumbnail'),
  createCarsController.handle
);

carsRouter.get('/all', EnsureAuthenticated.user, findAllCarsController.handle);
carsRouter.put(
  '/update',
  EnsureAuthenticated.user,
  upload.single('thumbnail'),
  updateCarsController.handle
);

carsRouter.post(
  '/accessories/create',
  EnsureAuthenticated.user,
  createAccessoriesController.handle
);

carsRouter.get(
  '/accessories/all/:carId',
  EnsureAuthenticated.user,
  findAllAccessoriesByCarController.handle
);

carsRouter.post(
  '/photos/create',
  EnsureAuthenticated.user,
  upload.array('photos'),
  createPhotosController.handle
);

carsRouter.get('/photos/all/:carId', EnsureAuthenticated.user, findPhotosByCarController.handle);
