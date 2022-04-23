import * as AuthSession from 'expo-auth-session';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { UserStorage } from '../global/storages/UserStorage';

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IUserAuthContext {
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface IAuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IUserAuthContext);

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { GOOGLE_API_URL } = process.env;

function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser>();

  async function signInWithGoogle() {
    try {
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${encodeURI(
        'profile email'
      )}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl: authUrl,
      })) as IAuthorizationResponse;

      if (type === 'success') {
        const response = await fetch(`${GOOGLE_API_URL}${params.access_token}`);
        const userInfo = await response.json();
        const userLogged: IUser = {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          photo: userInfo?.picture,
        };
        setUser(userLogged);
        await UserStorage.setData(userLogged);
      }
    } catch (error) {
      // setUser(undefined);
      console.log(error);
      throw new Error('error');
    }
  }

  async function signInWithApple() {
    console.log('SignIn With Apple');
  }

  async function signOut() {
    setUser(undefined);
    await UserStorage.removeData();
  }

  useEffect(() => {
    (async () => {
      const storageUser = await UserStorage.getData();
      if (!storageUser) {
        setUser(undefined);
      }
      setUser(storageUser);
    })();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ signInWithGoogle, signInWithApple, user, signOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
