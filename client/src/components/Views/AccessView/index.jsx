import './AccessView.css';
import { useState } from 'react';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

export const AccessView = () => {
  const [accessMode, setAccessMode] = useState(false);

  return (
    <div className="AccessView">
      {accessMode ? <LogIn /> : <SignUp />}
      <label htmlFor="SwitchAccessMode" className="AccessView__switch_mode_bt">
        <span>or <strong>{accessMode ? 'sign up' : 'log in'}</strong></span>
        <input
          type='checkbox'
          name='SwitchAccessMode'
          id='SwitchAccessMode'
          checked={accessMode}
          onChange={() => setAccessMode(prev => !prev)}
        />
      </label>
    </div>
  );
};
