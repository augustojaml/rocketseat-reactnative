import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppThemeStorage = {
  async setData(theme: string): Promise<String> {
    await AsyncStorage.setItem(`@MySavePass:theme`, theme);
    return theme;
  },
  async getData(): Promise<string | undefined> {
    const store = await AsyncStorage.getItem(`@MySavePass:theme`);
    if (!store) {
      return undefined;
    }
    return store;
  },
  async removeData(): Promise<void> {
    await AsyncStorage.removeItem(`@MySavePass:theme`);
  },
};
