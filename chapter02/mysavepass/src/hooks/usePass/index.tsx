import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { PassStorage } from '../../services/storage/PassStorage';

interface IPassProvider {
  children: ReactNode;
}

export interface IPassword {
  id: string;
  platform: string;
  userOrEmail: string;
  password: string;
}

interface IPassContext {
  isLoadingSavePass: boolean;
  savePass: (password: IPassword) => Promise<void>;
  passData: IPassword[] | undefined;
  loadStorage(): Promise<void>;
}

const PassContext = createContext({} as IPassContext);

function PassProvider({ children }: IPassProvider) {
  const [isLoadingSavePass, setIsLoadingSavePass] = useState(false);
  const [passData, setPassData] = useState<IPassword[]>();

  async function savePass(password: IPassword) {
    setIsLoadingSavePass(true);
    const store = await PassStorage.setData(password);
    setPassData(store);
    setIsLoadingSavePass(false);
  }

  async function loadStorage() {
    setIsLoadingSavePass(true);
    const data = await PassStorage.getData();
    setPassData(data);
    setIsLoadingSavePass(false);
  }

  useEffect(() => {
    (async () => {
      setIsLoadingSavePass(true);
      await loadStorage();
      setIsLoadingSavePass(false);
    })();
  }, []);

  return (
    <>
      <PassContext.Provider value={{ isLoadingSavePass, savePass, passData, loadStorage }}>
        {children}
      </PassContext.Provider>
    </>
  );
}

function usePass() {
  return useContext(PassContext);
}

export { PassProvider, usePass };
