import { container } from 'tsyringe';

import { ICarsRepository } from '@repositories/ICarsRepository';
import { IUsersRepository } from '@repositories/IUsersRepositories';
import { CarsPrismaRepository } from '@repositories/prisma/CarsPrismaRepository';
import { UsersPrismaRepository } from '@repositories/prisma/UsersPrismaRepository';
import { IAccessoriesRepository } from '@repositories/IAccessoriesRepository';
import { PhotosPrismaRepository } from '@repositories/prisma/PhotosPrismaRepository';
import { AccessoriesPrismaRepository } from '@repositories/prisma/AccessoriesPrismaRepository';
import { IPhotosRepository } from '@repositories/IPhotosRepository';
import { RentalsPrismaRepository } from '@repositories/prisma/RentalsPrismaRepository';
import { IRentalRepository } from '@repositories/IRentalRepository';

container.registerSingleton<IUsersRepository>('IUsersRepository', UsersPrismaRepository);

container.registerSingleton<ICarsRepository>('ICarsRepository', CarsPrismaRepository);

container.registerSingleton<IAccessoriesRepository>(
  'IAccessoriesRepository',
  AccessoriesPrismaRepository
);

container.registerSingleton<IPhotosRepository>('IPhotosRepository', PhotosPrismaRepository);

container.registerSingleton<IRentalRepository>('IRentalRepository', RentalsPrismaRepository);
