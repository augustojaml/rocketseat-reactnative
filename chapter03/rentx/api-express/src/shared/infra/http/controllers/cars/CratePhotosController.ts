import { CreatePhotosUseCase } from '@application/cars/CreatePhotosUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreatePhotosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { carId } = request.body;
    const files = request.files as unknown as { filename: string }[];
    const photos = files.map((photo) => photo.filename);

    const createPhotos = container.resolve(CreatePhotosUseCase);

    await createPhotos.execute({ carId: carId, photos: photos });

    return response.json({ message: 'Photos created' });
  }
}
