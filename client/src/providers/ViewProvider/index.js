import { useContext, createContext, useState, useEffect } from 'react';

export const VIEWS = {
  HOME: "HOME",
  ACCESS: "ACCESS",
  TIP: "TIP",
};

const ViewContext = createContext(VIEWS.HOME);

export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  const [selectedTip, setSelectedTip] = useState(null);

  const selectTip = (tip) => {
    if (
      (selectedTip === null) ||
      (selectedTip.tip_id !== tip.tip_id)
    ) {
      setSelectedTip(tip);
      setCurrentView(VIEWS.TIP);
    }
  }

  const goToHome = () => {
    setSelectedTip(null);
    setCurrentView(VIEWS.HOME);
  }

  const value = {
    selectedTip,
    selectTip,
    currentView,
    selectView: setCurrentView,
    goToHome
  }

  return (
    <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
  );
};


