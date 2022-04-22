import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITransaction } from '../../hooks/useTransaction';
import { UserStorage } from './UserStorage';

export const TransactionStorage = {
  async setData(transaction: ITransaction): Promise<void> {
    const user = await UserStorage.getData();
    const currentData = await this.getData();
    const joinData = [...currentData, transaction];
    const store = JSON.stringify(joinData);
    await AsyncStorage.setItem(`@GoFinance:user:${user!.id}`, store);
  },
  async getData(): Promise<ITransaction[]> {
    const user = await UserStorage.getData();
    const data = await AsyncStorage.getItem(`@GoFinance:user:${user!.id}`);
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  },
};
