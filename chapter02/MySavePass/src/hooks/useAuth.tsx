import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { UserStorage } from '../storage/UserStore';

WebBrowser.maybeCompleteAuthSession();

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface IAuthContext {
  isLoadingLogin: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
  user: IUser | undefined;
}

const { GOOGLE_CLIENT_ID } = process.env;

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [user, setUser] = useState<IUser>();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_CLIENT_ID,
    iosClientId: GOOGLE_CLIENT_ID,
    expoClientId: GOOGLE_CLIENT_ID,
    webClientId: GOOGLE_CLIENT_ID,
  });

  async function signIn() {
    setIsLoadingLogin(true);
    await promptAsync({ useProxy: true, showInRecents: true });
    setIsLoadingLogin(false);
  }

  async function signOut() {
    setIsLoadingLogin(true);
    await UserStorage.removeData();
    delete api.defaults.headers.common['Authorization'];
    setUser(undefined);
    setIsLoadingLogin(false);
  }

  useEffect(() => {
    (async () => {
      setIsLoadingLogin(true);
      if (response?.type === 'success') {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.authentication?.accessToken}`;
        const userResponse = await api.get('me');
        setUser(userResponse.data);
        await UserStorage.setData({
          id: userResponse.data.id,
          email: userResponse.data.email,
          name: userResponse.data.name,
          picture: userResponse.data.picture,
        });
      }
      setIsLoadingLogin(false);
    })();
  }, [response]);

  useEffect(() => {
    (async () => {
      setIsLoadingLogin(true);
      const loggedUser = await UserStorage.getData();
      if (loggedUser) {
        setUser(loggedUser);
      }
      setIsLoadingLogin(false);
    })();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isLoadingLogin, signIn, signOut, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
