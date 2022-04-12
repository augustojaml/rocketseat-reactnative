import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../_shared/services/api';

interface ICarProvider {
  children: ReactNode;
}

export interface ICar {
  id: string;
  brand: string;
  model: string;
  daily_rate: number;
  fuel_type: string;
  description: string;
  accessories: Array<{
    type: string;
    name: string;
  }>;
  photos: String[];
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
