import AsyncStorage from '@react-native-async-storage/async-storage';
import { ISocialUser } from '../../hooks/useAuth';

export const UserStorage = {
  async setData(user: ISocialUser): Promise<ISocialUser | undefined> {
    const store = JSON.stringify(user);
    await AsyncStorage.setItem('@MySavePass:user', store);
    return JSON.parse(store);
  },
  async getData(): Promise<ISocialUser | undefined> {
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
