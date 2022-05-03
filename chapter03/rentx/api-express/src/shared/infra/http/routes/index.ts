import { rentalsRouter } from './rentalsRouter';
import { carsRouter } from './carsRouter';
import { Request, Response, Router } from 'express';
import { usersRouter } from './usersRouter';

export const router = Router();

router.get('/test', (request: Request, response: Response) => {
  return response.json('Route test is ok ⛱');
});

router.use('/users', usersRouter);
router.use('/cars', carsRouter);
router.use('/rentals', rentalsRouter);
