import { Car, FuelTypeProps } from '@domain/cars/Car';

export type ICreateCar = {
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuelType: FuelTypeProps;
  licensePlate: string;
};

export type IUpdateCars = {
  id: string;
  name?: string;
  brand?: string;
  about?: string;
  period?: string;
  price?: number;
  fuelType?: FuelTypeProps;
  licensePlate?: string;
  thumbnail?: string;
  available?: boolean;
};

export interface ICarsRepository {
  create(data: ICreateCar): Promise<void>;
  findById(carId: string): Promise<Car | null>;
  findByLicensePlate(licensePlate: string): Promise<Car | null>;
  findAllCars(): Promise<Car[]>;
  updateCar(data: IUpdateCars): Promise<Car | null>;
}
