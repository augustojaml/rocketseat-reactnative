import { createContext, ReactNode, useContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

interface IAuthProvider {
  children: ReactNode;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthLoading: boolean;
  signIn: ({ email, password }: ICredentials) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);

function AuhProvider({ children }: IAuthProvider) {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  async function signIn({ email, password }: ICredentials) {
    if (!email || !password) {
      return Alert.alert('Email e/ou password inválidos');
    }
    setIsAuthLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const { code } = error;
        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'Email e/ou senha inválidos');
        }
        return Alert.alert('Não foi possível efeturar o login');
      })
      .finally(() => {
        setIsAuthLoading(false);
      });
  }

  return (
    <>
      <AuthContext.Provider value={{ isAuthLoading, signIn }}>{children}</AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuhProvider, useAuth };
