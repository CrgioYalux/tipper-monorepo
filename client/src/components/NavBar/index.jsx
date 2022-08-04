import './NavBar.css';
import { useView } from '../../providers/ViewProvider';

export const NavBar = () => {
  const { views, currentView, goToView } = useView();
  
	return (
    <label htmlFor='NavBar_bt' className='NavBar'>
      <input type='checkbox' id='NavBar_bt' name='NavBar_bt' defaultChecked={false} />
      <span>Menu</span>
      <ul className='NavBar_list'>
        {
          [...Object.keys(views)].map((view, key) => (
            <li
              key={key}
              className={view === currentView ? '--is-current' : '--is-not-current'}
              onClick={() => goToView(view)}
            >
              {view}
            </li>
          ))
        }
      </ul>
    </label>
	);
};
