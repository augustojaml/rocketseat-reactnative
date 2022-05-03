import { Router } from 'express';
import { CreateRentalsController } from '../controllers/rentals/CreateRentalsController';
import { FindRentalsByUserController } from '../controllers/rentals/FindRentalsByUserController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

export const rentalsRouter = Router();

const createRentalsController = new CreateRentalsController();
const findRentalsByUserController = new FindRentalsByUserController();

rentalsRouter.post('/create', EnsureAuthenticated.user, createRentalsController.handle);
rentalsRouter.get('/all', EnsureAuthenticated.user, findRentalsByUserController.handle);
