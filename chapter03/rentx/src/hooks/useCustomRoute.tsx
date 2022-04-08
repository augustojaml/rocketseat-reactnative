import { createContext, ReactNode, useContext, useState } from 'react';

interface ICustomRouteProvider {
  children: ReactNode;
}

interface ICustomRouteContext {
  showTab: Boolean;
  changeShowTab: (value: boolean) => void;
}

const CustomRouteContext = createContext({} as ICustomRouteContext);

function CustomRouteProvider({ children }: ICustomRouteProvider) {
  const [showTab, setShowTab] = useState(true);

  function changeShowTab(value: boolean) {
    setShowTab(value);
  }

  return (
    <>
      <CustomRouteContext.Provider value={{ showTab, changeShowTab }}>
        {children}
      </CustomRouteContext.Provider>
    </>
  );
}

function useCustomRoute() {
  return useContext(CustomRouteContext);
}

export { CustomRouteProvider, useCustomRoute };
