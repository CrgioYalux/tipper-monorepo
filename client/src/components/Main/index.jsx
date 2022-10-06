import './Main.css';
import { useView } from '../../providers/ViewProvider';
import { useClient } from '../../providers/ClientProvider';
import { mock_tips } from '../../mockdata/tips';
import { HomeView } from '../Views/HomeView';
import { TipView } from '../Views/TipView';
import { AccessView } from '../Views/AccessView';
import { ProfileView } from '../Views/ProfileView';
import { ExploreView } from '../Views/ExploreView';

export const Main = () => {
  const { views, currentView } = useView();
  const { logged, selectedTip } = useClient();

	return (
		<div className='Main'>
      {
        logged
        ? (
          <>
            {(currentView === views.HOME) && <HomeView tips={mock_tips} />}
            {(currentView === views.TIP && selectedTip !== null) && <TipView {...selectedTip} />}
            {(currentView === views.PROFILE) && <ProfileView profileID={{}} />}
            {(currentView === views.EXPLORE) && <ExploreView />}
          </>
        )
        : <AccessView />
      }
		</div>
	);
};
