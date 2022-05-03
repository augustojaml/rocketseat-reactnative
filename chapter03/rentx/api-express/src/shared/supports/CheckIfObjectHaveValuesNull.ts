import { AppError } from '@shared/infra/http/middlewares/AppError';

export function CheckIfObjectHaveValuesNull(data: any) {
  for (const key in data) {
    const value = data[key as keyof any];
    if (!value || value === undefined || value === null || value === '' || value === 0) {
      throw new AppError(`The field ${key} cannot be null, null or 0`);
    }
  }
}
