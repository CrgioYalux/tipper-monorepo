import './TipList.css';
import { Tip } from '../Tip';

export const TipList = ({ tips, for_comments = false, vars_class_name = '' }) => {
	return (
		<div 
      className={`TipList ${for_comments ? '--for-comments' : '--not-for-comments'} ${vars_class_name}`}
      style={{'--cant-comments': tips.length}}
    >
      {
        tips.length === 0 
        ? <h3>{for_comments ? 'No comments' : 'No tips yet'}</h3>
        : tips.map((tip) => (
          <Tip
            key={tip.tip_id}
            is_comment={for_comments}
            vars_class_name="TipList_Tip__vars"
            {...tip}
          />
        ))
      }
		</div>
	);
};
