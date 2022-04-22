import { format, parseISO } from 'date-fns';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from '../database';

import { api } from '../services/api';
import { Car } from '../database/models/Car';

interface ICarProvider {
  children: ReactNode;
}

export interface IAccessories {
  id: string;
  name: string;
  type: string;
}

export interface IPhotos {
  id: string;
  photo: string;
}

export interface ICar {
  id: string;
  name: string;
  brand: string;
  period: string;
  price: number;
  fuel_type: string;
  about: string;
  accessories: IAccessories[];
  photos: IPhotos[];
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

export interface ICarRental {
  user_id: string | undefined;
  car_id: string;
  start_date: Date;
  end_date: Date;
  total: number;
}

export interface IScheduledCars {
  id: string;
  car: {
    id: string;
    name: string;
    about: string;
    brand: string;
    created_at: Date;
    fuel_type: string;
    period: string;
    price: number;
    thumbnail: string;
    updated_at: Date;
  };
  start_date: string;
  end_date: string;
}

interface ICarContext {
  isLoadingCars: boolean;
  cars: ICar[];
  rentCar: (data: ICarRental) => Promise<void>;
  scheduledCars: IScheduledCars[];
  loadingCar: () => Promise<void>;
  loadingScheduledCars: () => Promise<void>;
  offLineSync: () => Promise<void>;
}

const CarContext = createContext({} as ICarContext);

function CarProvider({ children }: ICarProvider) {
  const [isLoadingCars, setIsLoadingCar] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);
  const [scheduledCars, setScheduledCars] = useState<IScheduledCars[]>([]);
  const carsCollection = database.get<Car>('cars');

  async function loadingCar() {
    try {
      setIsLoadingCar(true);
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsLoadingCar(false);
    }
  }

  async function rentCar(data: ICarRental) {
    try {
      await api.post('rentals', data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async function loadingScheduledCars() {
    try {
      setIsLoadingCar(true);
      const response = await api.get('rentals');
      const formattedScheduledCars = response.data.map((car: IScheduledCars) => {
        let updateCar = Object.assign({}, car, {
          start_date: format(parseISO(car.start_date), 'dd/MM/yyyy'),
          end_date: format(parseISO(car.end_date), 'dd/MM/yyyy'),
        });
        return updateCar;
      });

      setScheduledCars(formattedScheduledCars);
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsLoadingCar(false);
    }
  }

  async function offLineSync() {
    try {
      setIsLoadingCar(true);
      await synchronize({
        database,
        pullChanges: async ({ lastPulledAt }) => {
          const response = await api.get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
          const { changes, latestVersion } = response.data;
          return { changes, timestamp: latestVersion };
        },
        pushChanges: async ({ changes }) => {
          const user = changes.users;
          await api.post('/users/sync', user);
        },
      });
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsLoadingCar(false);
    }
  }

  // useEffect(() => {
  //   (async () => {
  //     const cars = await carsCollection.query().fetch();
  //     console.log(cars);
  //   })();
  // }, []);

  return (
    <>
      <CarContext.Provider
        value={{
          cars,
          isLoadingCars,
          rentCar,
          scheduledCars,
          loadingCar,
          loadingScheduledCars,
          offLineSync,
        }}
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
