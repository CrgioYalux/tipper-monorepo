import './ProfileView.css';
import { useState } from 'react';
import { mock_profiles } from '../../../mockdata/profiles';
import { mock_tips } from '../../../mockdata/tips';
import { TipList } from '../../TipList';
import { ProfileCard } from '../../ProfileCard';

export const ProfileView = ({ profileID, nickname }) => {
  const [profile, setProfile] = useState({...mock_profiles[0]});
  const [tips, setTips] = useState([...mock_tips]);

	return (
		<div className='ProfileView'>
      <ProfileCard profile={profile} className='ProfileView_ProfileCard' />
      <TipList tips={tips} className='ProfileView_TipList' />
		</div>
	);
};
