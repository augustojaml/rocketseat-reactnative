import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../../hooks/useAuth';

export const UserStorage = {
  async setData(user: IUser) {
    try {
      const store = JSON.stringify(user);
      await AsyncStorage.setItem('@GoFinance:user', store);
    } catch (error) {}
  },
  async getData(): Promise<IUser | undefined> {
    try {
      const store = await AsyncStorage.getItem('@GoFinance:user');
      if (store === null) {
        return;
      }

      const user: IUser = {
        id: JSON.parse(store).name,
        name: JSON.parse(store).name,
        email: JSON.parse(store).email,
        photo: JSON.parse(store).photo,
      };
      return user;
    } catch (error) {}
  },
  async removeData(): Promise<void> {
    try {
      await AsyncStorage.removeItem('@GoFinance:user');
    } catch (error) {}
  },
};
