import { UpdateCarsUseCase } from '@application/cars/UpdateCarsUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

/*
id: string;
name?: string;
brand?: string;
about?: string;
period?: string;
price?: number;
fuelType?: FuelTypeProps;
licensePlate?: string;
thumbnail?: string;
available: boolean
*/

export class UpdateCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, brand, about, period, price, fuelType, licensePlate, available } =
      request.body;

    const thumbnailFile = request.file?.filename;

    const updateCar = container.resolve(UpdateCarsUseCase);

    const car = await updateCar.execute({
      id,
      name,
      brand,
      about,
      period,
      price,
      fuelType,
      licensePlate,
      thumbnail: thumbnailFile,
      available: available === 'true' || available === true ? true : false,
    });

    return response.json(car);
  }
}
