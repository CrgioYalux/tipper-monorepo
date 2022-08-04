import './AddTipWidget.css';
import { AddIcon } from '../../Icons/AddIcon';

export const AddTipWidget = ({ className = "" }) => {
	return (
		<button
      className={`AddTipWidget ${className}`}
    >
      <AddIcon className="AddTipWidget_icon"/>
		</button>
	);
};
