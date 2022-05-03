import { FindPhotosByCarUseCase } from '@application/cars/FindPhotosByCarUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class FindPhotosByCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { carId } = request.params;

    const findPhotosByCar = container.resolve(FindPhotosByCarUseCase);
    const photos = await findPhotosByCar.execute(carId);

    return response.json(photos);
  }
}
