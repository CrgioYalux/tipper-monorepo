import './WidgetsDrawer.css';
import { SwitchThemeWidget } from '../Widgets/SwitchThemeWidget';
import { AddTipWidget } from '../Widgets/AddTipWidget';
import { ExploreWidget } from '../Widgets/ExploreWidget';
import { ProfileWidget } from '../Widgets/ProfileWidget';

export const WidgetsDrawer = () => {
	return (
		<label htmlFor='WidgetsDrawer_bt' className='WidgetsDrawer'>
      <input type='checkbox' id='WidgetsDrawer_bt' name='WidgetsDrawer_bt' defaultChecked={false} />
      <span className='WidgetsDrawer_bt'>Menu</span>
      <div className='WidgetsDrawer_content'>
        <SwitchThemeWidget className='WidgetsDrawer_SwitchTheme' />
        <AddTipWidget className='WidgetsDrawer_AddTip' />
        <ExploreWidget className='WidgetsDrawer_Explore' />
        <ProfileWidget className='WidgetsDrawer_Profile' />
      </div>
		</label>
	);
};
