import { makeRedirectUri, revokeAsync, useAuthRequest } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

WebBrowser.maybeCompleteAuthSession();

interface IAuthProvider {
  children: ReactNode;
}

interface ITwitchUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface IAuthContext {
  user: ITwitchUser | undefined;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthLoading: boolean;
}

const AuthContext = createContext({} as IAuthContext);

const endPoints = {
  authorizationEndpoint: 'https://id.twitch.tv/oauth2/authorize',
  tokenEndpoint: 'https://id.twitch.tv/oauth2/token',
  revocationEndpoint: 'https://id.twitch.tv/oauth2/revoke',
};

function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<ITwitchUser>();
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [token, setToken] = useState('');

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: 'token',
      clientId: process.env.TWITCH_CLIENT_ID!,
      redirectUri: makeRedirectUri({
        useProxy: true,
      }),
      scopes: ['openid', 'user:read:email', 'user:read:follows'],
    },
    endPoints
  );

  async function signIn() {
    try {
      setIsAuthLoading(true);
      await promptAsync({ useProxy: true });
    } catch (error) {
      console.log('ERROR: ', error);
    } finally {
      setIsAuthLoading(false);
    }
  }

  async function signOut() {
    try {
      setIsAuthLoading(true);
      await revokeAsync(
        { token: token, clientId: process.env.TWITCH_CLIENT_ID! },
        { revocationEndpoint: endPoints.revocationEndpoint }
      );
      setUser(undefined);
    } catch (error) {
      console.log('ERROR: ', error);
    } finally {
      setIsAuthLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      if (response?.type === 'success' && response?.authentication) {
        setIsAuthLoading(true);
        setToken(response.authentication.accessToken);

        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.authentication.accessToken}`;

        api.defaults.headers.common['Client-Id'] = process.env.TWITCH_CLIENT_ID!;

        const responseUser = await api.get('/users');

        setUser({
          id: responseUser.data.data[0].id,
          name: responseUser.data.data[0].display_name,
          email: responseUser.data.data[0].email,
          avatar: responseUser.data.data[0].profile_image_url,
        });
        setIsAuthLoading(false);
      }
    })();
  }, [response]);

  return (
    <>
      <AuthContext.Provider value={{ user, signIn, signOut, isAuthLoading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
