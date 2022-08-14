import './HomeView.css';
import { useView } from '../../../providers/ViewProvider';
import { TipList } from '../../TipList';

export const HomeView = ({ tips }) => {
  return (
    <div className='HomeView'>
      <TipList tips={tips} />
    </div>
  );
};
