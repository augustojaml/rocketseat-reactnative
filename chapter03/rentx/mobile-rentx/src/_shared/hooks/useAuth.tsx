import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  driver_license: string;
  password: string;
  avatar?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  signUp: (data: IUser) => Promise<void>;
  signIn: (data: IUserCredentials) => Promise<void>;
  isLoadingUser: boolean;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  async function signUp(data: IUser) {
    try {
      setIsLoadingUser(true);
      await api.post('/users', data);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function signIn(data: IUserCredentials) {
    try {
      setIsLoadingUser(true);
      const response = await api.post('/sessions', data);
      const { token, user } = response.data;
      console.log({ token, user });
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  return (
    <>
      <AuthContext.Provider value={{ user, signUp, signIn, isLoadingUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
