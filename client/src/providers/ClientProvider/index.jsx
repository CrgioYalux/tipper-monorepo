import { useState, useEffect, useContext, createContext } from "react";
import { useView } from "../ViewProvider";
import { VIEWS } from '../../components/Views';

const ClientContext = createContext({
  logged: false,
  selectedTip: null,
  selectTip: () => {},
  logIn: () => {},
  logOut: () => {}
});

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
  const [logged, setLogged] = useState(true);
  const [selectedTip, setSelectedTip] = useState(null);
  const { goToView } = useView();

  useEffect(() => {
    if (selectedTip !== null) {
      goToView(VIEWS.TIP);
    }
  }, [selectedTip]);

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
