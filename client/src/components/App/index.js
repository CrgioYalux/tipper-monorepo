import { useEffect, useState } from 'react';
import { HomeView } from '../Views/HomeView';
import { TipView } from '../Views/TipView';
import { AccessView } from '../Views/AccessView';
import { useView, VIEWS } from '../../providers/ViewProvider';
import { tips } from '../Tip/mock_data.js';
import { useQuery } from 'react-query';
import './App.css';

export const App = () => {
  const { currentView, selectedTip, goToHome } = useView();
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      {
        logged
        ? (
            <div className="Tips_container">
              {currentView === VIEWS.HOME && <HomeView tips={tips} />}
              {(currentView === VIEWS.TIP && selectedTip !== null) && <TipView {...selectedTip} />}
            </div>
          )
        : (
            <div className="">
              <AccessView /> 
            </div>
          )
        }
      {currentView === VIEWS.TIP && <button onClick={() => goToHome()}>home</button>}
    </div>
  )
}
