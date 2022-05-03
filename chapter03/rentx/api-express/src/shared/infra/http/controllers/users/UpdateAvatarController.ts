import { UpdateAvatarUseCase } from '@application/users/UpdateAvatarUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const avatarFile = request.file!.filename;

    const updateAvatar = container.resolve(UpdateAvatarUseCase);

    const pathOfFile = await updateAvatar.execute({ userId, avatarFile });

    return response.json(pathOfFile);
  }
}
