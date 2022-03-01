import AsyncStorage from '@react-native-async-storage/async-storage';
import {TaskProps} from '../components/TaskItem';

const StorageTasks = {
  async setData(tasks: TaskProps[]) {
    try {
      const store = JSON.stringify(tasks);
      await AsyncStorage.setItem('@tasks_Key', store);
    } catch (error) {}
  },
  async getData() {
    try {
      const store = await AsyncStorage.getItem('@tasks_Key');
      return store !== null ? JSON.parse(store) : null;
    } catch (error) {}
  },
};

export {StorageTasks};
