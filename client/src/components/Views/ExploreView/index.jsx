import './ExploreView.css';
import { useState } from 'react';
import { mock_tendencies } from "../../../mockdata/tendencies";
import { mock_tips } from "../../../mockdata/tips";
import { TendencieList } from './TendencieList';
import { TipList } from '../../TipList';

export const ExploreView = (props) => {
  const {
    classes = {}
  } = props;

  const {
    containerClass = ''
  } = classes;

  const [tendencies, setTendencies] = useState([...mock_tendencies]);
  const [tips, setTips] = useState([...mock_tips]);
  const [currentTendencie, setCurrentTendencie] = useState(tendencies[0] ?? 'All');

	return (
		<div className={`ExploreView ${containerClass}`}>
      <TendencieList
        states={{ tendencies, tendencieByDefault: currentTendencie }}
        classes={{ containerClass:'ExploreView_TendencieList' }}
        events={{ onChange: { selectTendencie: setCurrentTendencie } }}
      />
      <div className='ExploreView_TipList'>
        <TipList tips={tips} />
        <button>Load more</button>
      </div>
		</div>
	);
};
