import React from 'react';
import ProfilePicture from './ProfilePicture';
import MenuBar from './MenuBar';
import PersonalInfo from './PersonalInfo'
import PersonToPositions from './PersonToPositions'


class ProfilePage extends React.Component{
	render(){
		return (
			<div>
				<MenuBar/>
				<PersonalInfo/>
				<PersonToPositions/>
			</div>
		)
	}
}

export default ProfilePage