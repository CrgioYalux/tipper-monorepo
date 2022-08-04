import './ExploreWidget.css';
import { useView } from '../../../providers/ViewProvider';
import { HashtagIcon } from '../../Icons/HashtagIcon';

export const ExploreWidget = ({ className = '' }) => {
  const { views, goToView } = useView();
	return (
		<button
      onClick={() => goToView(views.Explore)}
      className={`ExploreWidget ${className}`}
    >
      <HashtagIcon className='ExploreWidget_icon' />   
		</button>
	);
};
