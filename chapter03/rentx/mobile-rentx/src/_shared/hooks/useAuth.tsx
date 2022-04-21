import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { database } from '../database';
import { api } from '../services/api';

import { User } from '../database/models/User';

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  user_id: string;
  name: string;
  email: string;
  driver_license: string;
  password: string;
  avatar?: string;
  token: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  signUp: (data: IUser) => Promise<void>;
  signIn: (data: IUserCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUser: boolean;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const usersCollection = database.get<User>('users');

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
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      await database.write(async () => {
        const result = await usersCollection.create((newUser) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = token;
        });
        const userData = {
          ...user,
          user_id: user.id,
          id: result._raw.id,
          token: token,
        };
        setUser(userData);
      });
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUser(true);
      await database.write(async () => {
        const findUser = await usersCollection.find(user.id!);
        await findUser.destroyPermanently();
        setUser({} as IUser);
      });
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingUser(true);
        const result = await usersCollection.query().fetch();
        if (result.length > 0) {
          const resultUser = result[0]._raw as unknown as IUser;
          api.defaults.headers.common['Authorization'] = `Bearer ${resultUser.token}`;
          setUser(resultUser);
        }
      } catch (error: any) {
        throw new Error(error);
      } finally {
        setIsLoadingUser(false);
      }
    })();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, signUp, signIn, isLoadingUser, signOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
