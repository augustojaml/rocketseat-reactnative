import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { UserStorage } from '../../services/storage/UserStore';

WebBrowser.maybeCompleteAuthSession();

interface IAuthHookProvider {
  children: ReactNode;
}

export interface ISocialUser {
  id: string;
  name: string;
  email: string;
  picture: string;
}

interface IAuthHookContext {
  isLoadingLogin: boolean;
  signInGoogle(): Promise<void>;
  signOutGoogle(): Promise<void>;
  user: ISocialUser | undefined;
}

const AuthHookContext = createContext({} as IAuthHookContext);

function AuthHookProvider({ children }: IAuthHookProvider) {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [user, setUser] = useState<ISocialUser>();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.WEB_CLIENT_ID,
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: process.env.ANDROID_CLIENT_ID,
    webClientId: process.env.WEB_CLIENT_ID,
  });

  async function signInGoogle() {
    setIsLoadingLogin(true);
    await promptAsync({ useProxy: false });
    setIsLoadingLogin(false);
  }

  async function signOutGoogle() {
    setIsLoadingLogin(true);
    setTimeout(() => {
      setUser(undefined);
      setIsLoadingLogin(false);
    }, 2000);
  }

  useEffect(() => {
    (async () => {
      if (response?.type === 'success') {
        setIsLoadingLogin(true);
        const fetchResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${response.authentication?.accessToken}` },
        });
        const { id, name, email, picture } = await fetchResponse.json();
        setUser({
          id,
          name,
          email,
          picture,
        });

        await UserStorage.setData({
          id,
          name,
          email,
          picture,
        });
        setIsLoadingLogin(false);
      }
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
      <AuthHookContext.Provider value={{ isLoadingLogin, signInGoogle, signOutGoogle, user }}>
        {children}
      </AuthHookContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthHookContext);
}

export { AuthHookProvider, useAuth };
