import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface ICarProvider {
  children: ReactNode;
}

export interface IAccessories {
  type: string;
  name: string;
}

export interface ICar {
  id: string;
  brand: string;
  model: string;
  daily_rate: number;
  fuel_type: string;
  description: string;
  accessories: IAccessories[];
  photos: String[];
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
}

const CarContext = createContext({} as ICarContext);

function CarProvider({ children }: ICarProvider) {
  const [isLoadingCars, setIsLoadingCar] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoadingCar(true);
      const response = await api.get('/cars');
      setCars(response.data);
      setIsLoadingCar(false);
    })();
  }, []);

  return (
    <>
      <CarContext.Provider value={{ cars, isLoadingCars }}>{children}</CarContext.Provider>
    </>
  );
}

function useCar() {
  return useContext(CarContext);
}

export { CarProvider, useCar };
