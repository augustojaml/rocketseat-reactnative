import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPassword } from '../hooks/usePass';

const StoragePass = {
  async setData(password: IPassword): Promise<IPassword[]> {
    const currentData = await this.getData();
    var joinData = [...currentData, password];
    const store = JSON.stringify(joinData);
    await AsyncStorage.setItem('@MySavePass:password', store);
    return JSON.parse(store);
  },
  async getData(): Promise<IPassword[]> {
    const data = await AsyncStorage.getItem('@MySavePass:password');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  },
};

export { StoragePass };
