import { Tip } from '../../Tip';
import { useView } from '../../../providers/ViewProvider';
import './HomeView.css';

export const HomeView = ({ tips }) => {
  return (
      <div className="HomeView">
        {
          tips.map((tip) => (
            <Tip
              key={tip.tip_id}
              {...tip}
            />
          ))
        }
      </div>
  );
};
