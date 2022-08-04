import { useState, useContext, createContext } from "react";

const ClientContext = createContext({
  logged: false,
  selectedTip: null,
  selectTip: () => {},
  logIn: () => {},
  logOut: () => {}
});

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  const value = {
    logged,
    selectedTip,
    selectTip: (tip) => { 
      setSelectedTip(tip);
    },
    logIn: () => {
      setLogged(true);
    },
    logOut: () => {
      setLogged(false);
    }
  };

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
};
