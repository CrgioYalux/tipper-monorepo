import './SettingWidget.css';
import { useView } from '../../../providers/ViewProvider';
import { GearIcon } from '../../Icons/GearIcon';

export const SettingWidget = ({ className = '' }) => {
  const { views, goToView } = useView();

	return (
		<button
      onClick={() => goToView(views.SETTING)}
      className={`SettingWidget ${className}`}
    >
      <GearIcon className='SettingWidget_icon'/>
		</button>
	);
};
