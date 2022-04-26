import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface IAuthProvider {
  children: ReactNode;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  isAdmin: boolean;
}

interface IAuthContext {
  isAuthLoading: boolean;
  signIn: ({ email, password }: ICredentials) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  user: IUser | null;
}

const USER_COLLECTION = '@gopizza:user';

const AuthContext = createContext({} as IAuthContext);

function AuhProvider({ children }: IAuthProvider) {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  async function signIn({ email, password }: ICredentials) {
    if (!email || !password) {
      return Alert.alert('Email e/ou password inválidos');
    }
    setIsAuthLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firestore()
          .collection('users')
          .doc(response.user.uid)
          .get()
          .then(async (profile) => {
            if (profile.exists) {
              const { name, isAdmin } = profile.data() as IUser;
              const userData = {
                id: response.user.uid,
                name: name,
                isAdmin: isAdmin,
              };
              // console.log({ id: response.user.uid, name: name, isAdmin: isAdmin });
              setUser(userData);
              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
            }
          })
          .catch(() => Alert.alert('Login Error', 'Falha na autenticação'));
        // const { name, isAdmin } = response;
        // console.log(response);
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

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  async function forgotPassword(email: string) {
    if (!email) {
      return Alert.alert('Redefinir senha', 'Informe o E-mail');
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return Alert.alert(
          'Redefinir senha',
          'Enviamos um link no seu email para recuperação de senha'
        );
      })
      .catch(() => {
        return Alert.alert('Redefinir senha', 'Houve um erro ao tentar recuperar senha');
      });
  }

  useEffect(() => {
    (async () => {
      setIsAuthLoading(true);
      const storageUser = await AsyncStorage.getItem(USER_COLLECTION);
      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
      setIsAuthLoading(false);
    })();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuthLoading, signIn, user, signOut, forgotPassword }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuhProvider, useAuth };
