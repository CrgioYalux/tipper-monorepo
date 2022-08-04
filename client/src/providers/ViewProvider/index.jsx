import { useContext, createContext, useState } from 'react';

const ViewContext = createContext("");

export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children, views, defaultView }) => {
  const [currentView, setCurrentView] = useState(defaultView);
  
  const goToView = (view) => {
    if ([...Object.values(views)].find((v) => v === view)) setCurrentView(view);
  };

  const value = {
    views,
    currentView,
    goToView 
  };

  return (
    <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
  );
};


