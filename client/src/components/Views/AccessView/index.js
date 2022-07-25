import './AccessView.css';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

export const AccessView = () => {
  return (
    <div className="AccessView">
      <LogIn />
      <SignUp />
    </div>
  )
};
