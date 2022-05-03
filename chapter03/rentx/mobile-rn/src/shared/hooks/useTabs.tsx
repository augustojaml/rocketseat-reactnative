import { createContext, ReactNode, useContext, useState } from 'react';

interface ITabProvider {
  children: ReactNode;
}

interface ITabContext {
  showTabs: boolean;
  changeShowTabs: (value: boolean) => void;
}

const TabContext = createContext({} as ITabContext);

function TabProvider({ children }: ITabProvider) {
  const [showTabs, setShowTabs] = useState(true);

  function changeShowTabs(value: boolean) {
    setShowTabs(value);
  }

  return (
    <>
      <TabContext.Provider value={{ showTabs, changeShowTabs }}>{children}</TabContext.Provider>
    </>
  );
}

function useTabs() {
  return useContext(TabContext);
}

export { TabProvider, useTabs };
