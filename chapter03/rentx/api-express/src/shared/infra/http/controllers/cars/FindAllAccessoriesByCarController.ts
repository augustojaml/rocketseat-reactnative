import { FindAllAccessoriesByCarUseCase } from '@application/cars/FindAllAccessoriesByCarUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class FindAllAccessoriesByCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { carId } = request.params;

    const findAllAccessoriesByCar = container.resolve(FindAllAccessoriesByCarUseCase);
    const accessories = await findAllAccessoriesByCar.execute(carId);

    return response.json(accessories);
  }
}
