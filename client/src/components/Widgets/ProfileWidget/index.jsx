import './ProfileWidget.css';
import { useView } from '../../../providers/ViewProvider';
import { ProfileIcon } from '../../Icons/ProfileIcon';

export const ProfileWidget = ({ className = '' }) => {
  const { views, goToView } = useView();
	return (
		<button
      onClick={() => goToView(views.Profile)}
      className={`ProfileWidget ${className}`}
    >
      <ProfileIcon className='ProfileWidget_icon'/>
		</button>
	);
};
