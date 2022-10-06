import './WidgetsDrawer.css';
import { useState } from 'react';
import { SwitchThemeWidget } from '../Widgets/SwitchThemeWidget';
import { AddTipWidget } from '../Widgets/AddTipWidget';
import { ExploreWidget } from '../Widgets/ExploreWidget';
import { ProfileWidget } from '../Widgets/ProfileWidget';
import { SettingWidget } from '../Widgets/SettingWidget';

export const WidgetsDrawer = () => {
    const [tipping, setTipping] = useState(false);

    const startUsing = () => {
    setTipping(true);
    };

    const endUsing = () => {
    setTipping(false);
    };

	return (
        <label htmlFor='WidgetsDrawer_bt' className='WidgetsDrawer'>
            <input type='checkbox' id='WidgetsDrawer_bt' name='WidgetsDrawer_bt' defaultChecked={false} />
            <span className='WidgetsDrawer_bt'>Menu</span>
            <div className='WidgetsDrawer_content'>
                {
                  tipping 
                    ? (
                      <>
                        <SwitchThemeWidget
                          className='WidgetsDrawer_SwitchTheme'
                        />
                        <AddTipWidget
                          className='WidgetsDrawer_AddTip_form'
                          using={true}
                          endUsing={endUsing}
                        />
                      </>
                    )
                    : (
                      <>
                        <SwitchThemeWidget
                          className='WidgetsDrawer_SwitchTheme'
                        />
                        <AddTipWidget
                          className='WidgetsDrawer_AddTip'
                          using={false}
                          startUsing={startUsing}
                        />
                        <ExploreWidget 
                          className='WidgetsDrawer_Explore'
                        />
                        <ProfileWidget
                          className='WidgetsDrawer_Profile'
                        />
                        <SettingWidget 
                          className='WidgetsDrawer_Setting'
                        />
                      </>
                    ) 
                }
            </div>
        </label>
	);
};
