import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../hooks/useAuth';

export const UserStorage = {
  async setData(user: IUser): Promise<IUser | undefined> {
    const store = JSON.stringify(user);
    await AsyncStorage.setItem('@MySavePass:user', store);
    return JSON.parse(store);
  },
  async getData(): Promise<IUser | undefined> {
    const store = await AsyncStorage.getItem('@MySavePass:user');
    if (!store) {
      return undefined;
    }
    return JSON.parse(store);
  },
  async removeData(): Promise<void> {
    await AsyncStorage.removeItem('@MySavePass:user');
  },
};
