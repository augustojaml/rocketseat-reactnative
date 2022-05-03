import { format } from 'date-fns';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { tempCar } from '../utils/tempCar';

interface ICarProvider {
  children: ReactNode;
}

export interface IAccessories {
  id: string;
  carId: string;
  type: string;
  name: string;
}

export interface ICarPhotos {
  id: string;
  carId: string;
  photo: string;
}

export interface ICar {
  id: string;
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuelType: string;
  licensePlate: string;
  available: string;
  thumbnail: string;
  accessories?: IAccessories[];
  photos?: ICarPhotos[];
}

export interface IRental {
  userId: string | undefined;
  carId: string;
  dateFrom: Date;
  dateAt: Date;
  total: number;
}

export interface IRentalResponse {
  id: string;
  userId: string;
  dateAt: string;
  dateFrom: string;
  total: string;
  car: {
    id: string;
    brand: string;
    name: string;
    period: string;
    price: string;
    fuelType: string;
    thumbnail: string;
  };
}

export interface ICarAppointment {
  car_id: string;
  user_id: string;
  brand: string;
  model: string;
  daily_rate: number;
  fuel_type: string;
  photo: string;
  dateAt: string;
  dateFrom: string;
}

interface ICarContext {
  isLoadingCars: boolean;
  cars: ICar[];
  rent: (rental: IRental) => Promise<void>;
  fetchApiRentals: () => Promise<void>;
  fetchApiCars: () => Promise<void>;
  rentals: IRentalResponse[];
}

const CarContext = createContext({} as ICarContext);

function CarProvider({ children }: ICarProvider) {
  const [isLoadingCars, setIsLoadingCar] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);
  const [rentals, setRentals] = useState<IRentalResponse[]>([]);

  async function fetchApiCars() {
    try {
      setIsLoadingCar(true);
      const { data } = await api.get<ICar[]>('/cars/all');
      setCars(data);
    } catch (error) {
      throw new Error('Falha ao carregar carros. Verifique sua conexão com a internet');
    } finally {
      setIsLoadingCar(false);
    }
  }

  async function rent(rental: IRental) {
    try {
      setIsLoadingCar(true);
      await api.post('/rentals/create', rental);
    } catch (error) {
      throw new Error('Falha ao carregar criar agendamentos');
    } finally {
      setIsLoadingCar(false);
    }
  }

  async function fetchApiRentals() {
    try {
      setIsLoadingCar(true);
      const { data } = await api.get<IRentalResponse[]>('/rentals/all');
      const formattedRental = data.map((rental) => {
        return {
          ...rental,
          dateFrom: format(new Date(rental.dateFrom), 'dd/MM/yyyy'),
          dateAt: format(new Date(rental.dateAt), 'dd/MM/yyyy'),
          car: {
            ...rental.car,
            thumbnail: `${api.defaults.baseURL}/cars/${rental.car.thumbnail}`,
          },
        };
      });

      setRentals(formattedRental);
    } catch (error) {
      throw new Error('Falha ao carregar carros. Verifique sua conexão com a internet');
    } finally {
      setIsLoadingCar(false);
    }
  }

  return (
    <>
      <CarContext.Provider
        value={{ cars, rent, rentals, fetchApiCars, fetchApiRentals, isLoadingCars }}
      >
        {children}
      </CarContext.Provider>
    </>
  );
}

function useCar() {
  return useContext(CarContext);
}

export { CarProvider, useCar };
