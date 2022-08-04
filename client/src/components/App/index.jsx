import './App.css';
import { MenuBar } from '../MenuBar';
import { Main } from '../Main';

export const App = () => {
  return (
    <div className='App'>
      <Main />
      <MenuBar />
    </div>
  );
};
