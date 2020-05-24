import React from 'react';
import ProfilePicture from './ProfilePicture';
import PhotoAndAbout from './PhotoAndAbout'
import WorkHistory from './WorkHistory'
import mock_person_info from './mock_data'


class ProfilePage extends React.Component{
	state = {
    is_profile: true
  };

	render(){
		return (
			<div>
				<PhotoAndAbout />
				<WorkHistory />
			</div>
		)
	}
}

export default ProfilePage;
