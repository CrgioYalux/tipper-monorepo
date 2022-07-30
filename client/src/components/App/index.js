import './App.css';
import { useState } from 'react';
import { useView, VIEWS } from '../../providers/ViewProvider';
import { tips } from '../Tip/mock_data.js';
import { HomeView } from '../Views/HomeView';
import { TipView } from '../Views/TipView';
import { AccessView } from '../Views/AccessView';
import { useTheme } from '../../providers/ThemeProvider';

export const App = () => {
  const { currentView, selectedTip, goToHome } = useView();
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const { theme, toggleTheme } = useTheme();
 
  return (
    <div className={`App ${logged ? "--logged" : "--unlogged"}`}>
      <button onClick={() => toggleTheme()}>{theme} theme</button>
      {
        logged
        ? (
            <div className="Tips_container">
              {currentView === VIEWS.HOME && <HomeView tips={tips} />}
              {(currentView === VIEWS.TIP && selectedTip !== null) && <TipView {...selectedTip} />}
            </div>
          )
        : <AccessView /> 
    }
      {currentView === VIEWS.TIP && <button onClick={() => goToHome()}>home</button>}
      
    </div>
  )
}
