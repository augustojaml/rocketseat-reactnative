import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPassword } from '../hooks/usePass';
import { UserStorage } from './UserStore';

export const PassStorage = {
  async setData(password: IPassword): Promise<IPassword[]> {
    const user = await UserStorage.getData();

    const currentData = await this.getData();
    var joinData = [...currentData, password];
    const store = JSON.stringify(joinData);
    await AsyncStorage.setItem(`@MySavePass:password:${user}`, store);
    return JSON.parse(store);
  },
  async getData(): Promise<IPassword[]> {
    const user = await UserStorage.getData();
    const data = await AsyncStorage.getItem(`@MySavePass:password:${user}`);
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  },
};
