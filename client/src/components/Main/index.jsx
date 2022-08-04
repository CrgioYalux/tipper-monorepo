import './Main.css';
import { useView } from '../../providers/ViewProvider';
import { useClient } from '../../providers/ClientProvider';
import { mock_tips } from '../../mockdata/tips';
import { VIEWS } from '../Views';
import { HomeView } from '../Views/HomeView';
import { TipView } from '../Views/TipView';
import { AccessView } from '../Views/AccessView';

export const Main = () => {
  const { currentView } = useView();
  const { logged, selectedTip } = useClient();

	return (
		<div className='Main'>
      {
        logged
        ? (
          <>
            {currentView === VIEWS.HOME && <HomeView tips={mock_tips} />}
            {(currentView === VIEWS.TIP && selectedTip !== null) && <TipView {...selectedTip} />}
          </>
        )
        : <AccessView />
      }
		</div>
	);
};
