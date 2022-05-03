import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  driverLicense: string;
  password: string;
  avatar?: string | undefined;
  token: string;
}

interface IUpdateUser {
  name?: string;
  email?: string;
  driverLicense?: string;
  avatar?: string;
  password?: string;
  newPassword?: string;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser | undefined;
  register: (user: IUser) => Promise<void>;
  signIn: (credentials: ICredentials) => Promise<void>;
  updateUser: (form: IUpdateUser) => Promise<void>;
  updateAvatarFile: (file: any) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUser: boolean;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | undefined>();
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  async function register(user: IUser) {
    try {
      setIsLoadingUser(true);
      await api.post('/users/create', user);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function signIn(credentials: ICredentials) {
    try {
      setIsLoadingUser(true);
      const { data } = await api.post('/users/auth', credentials);
      const { token, user } = data;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ ...user, token: token });
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function updateUser(form: IUpdateUser) {
    try {
      setIsLoadingUser(true);
      const { data } = await api.put('/users/update', form);
      const updateUser = {
        ...user,
        name: data.name,
        email: data.email,
        driverLicense: data.driverLicense,
      } as IUser;
      setUser(updateUser);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function updateAvatarFile(file: any) {
    try {
      setIsLoadingUser(true);
      const formData = new FormData();
      const fileProps = {
        name: file.uri.split('/').pop(),
        ext: `image/${file.uri.slice(-3)}`,
      };

      formData.append('avatar', {
        // @ts-ignore
        name: fileProps.name,
        type: fileProps.ext,
        uri: file.uri,
      });

      const response = await api.patch('/users/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
      setUser({ ...user, avatar: response.data } as IUser);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function signOut() {
    api.defaults.headers.common['Authorization'] = '';
    setUser(undefined);
  }

  useEffect(() => {}, [user]);

  return (
    <>
      <AuthContext.Provider
        value={{ user, register, signIn, updateUser, updateAvatarFile, signOut, isLoadingUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
