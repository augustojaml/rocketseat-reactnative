import { createContext, ReactNode, useContext, useState } from 'react';

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  isLoadingLogin: boolean;
  signIn(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  async function signIn() {
    setIsLoadingLogin(true);
    console.log('SignIn');
    setIsLoadingLogin(false);
    // setTimeout(() => {}, 2000);
  }

  return (
    <>
      <AuthContext.Provider value={{ isLoadingLogin, signIn }}>{children}</AuthContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
