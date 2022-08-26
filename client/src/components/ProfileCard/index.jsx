import './ProfileCard.css';
import { CakeIcon } from '../Icons/CakeIcon';

export const ProfileCard = ({ profile, className = '' }) => {
	return (
		<div className={`ProfileCard ${className}`}>
      <section className='ProfileCard_header'>
        <span className='ProfileCard_fullname'>{profile.fullname}</span>
        <small className='ProfileCard_nickname'>(@{profile.nickname})</small>
      </section>
      <section className='ProfileCard_body'>
        <p className='ProfileCard_biography'>{profile.biography}</p>
      </section>
      <section className='ProfileCard_footer'>
        <div className='ProfileCard_dateOfBirth'>
          <CakeIcon className='ProfileCard_dateOfBirth_icon'/>
          <small className='ProfileCard_dateOfBirth_label'>{profile.dateOfBirth}</small>
        </div>
        <small className='ProfileCard_created'>joined on {profile.created}</small>
      </section>
		</div>
	);
};

/* add the text filter from the https://codepen.io/ines/pen/NXbmRO */
