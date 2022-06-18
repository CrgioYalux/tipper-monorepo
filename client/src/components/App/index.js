import { useEffect } from 'react';
import { HomeView } from '../Views/HomeView';
import { TipView } from '../Views/TipView';
import { useView, VIEWS } from '../../providers/ViewProvider';
import { tips } from '../Tip/mock_data.js';
import './App.css';

export const App = () => {
  const { currentView, selectedTip, goToHome } = useView();

  return (
    <div className="App">
      <div className="Tips_container">
        {currentView === VIEWS.HOME && <HomeView tips={tips} />}
        {(currentView === VIEWS.TIP && selectedTip !== null) && <TipView {...selectedTip} />}
      </div>
      {currentView === VIEWS.TIP && <button onClick={() => goToHome()}>home</button>}
    </div>
  )
}
