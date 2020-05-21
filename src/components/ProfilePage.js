import React from 'react';
import ProfilePicture from './ProfilePicture';
import MenuBar from './MenuBar';
import PersonalInfo from './PersonalInfo'
import Search from './Search'

class ProfilePage extends React.Component{
	state = {
    movies: null,
    loading: false,
    value: ''
  };
	render(){
		return (
			<div>
				<MenuBar/>
				<Search/>
			</div>
		)
	}
}

export default ProfilePage
