import './TipList.css';
import { Tip } from '../Tip';

export const TipList = ({ tips, forComments = false, className = '' }) => {
	return (
		<div 
      className={`TipList ${forComments ? '--for-comments' : '--not-for-comments'} ${className}`}
      style={{'--cant-comments': tips.length}}
    >
      {
        tips.length === 0 
        ? <h3>{forComments ? 'No comments' : 'No tips yet'}</h3>
        : tips.map((tip) => (
          <Tip
            key={tip.tipID}
            isComment={forComments}
            className="TipList_Tip__vars"
            {...tip}
          />
        ))
      }
		</div>
	);
};
