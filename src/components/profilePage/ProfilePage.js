import React from 'react';
import ProfilePicture from './ProfilePicture';
import WorkHistory from './WorkHistory'
import PersonInfo from './PersonInfo';

import mock_person_info from './mock_data'
import image_src_mock from './image_src_mock';


class ProfilePage extends React.Component{
	state = {
    is_profile: true
  };

	render(){
		return (
			<div class="container-fluid photoAndAbout align-self-center">
			  <div class="row">
			    <div class="col-sm-3 col-md-6 col-lg-3">
			    	<ProfilePicture picInfo={image_src_mock[0]}/>
			    </div>
			    <div class="col-sm-9 col-md-6 col-lg-4">
			    	<PersonInfo item={mock_person_info[0]}/>
			    </div>
			    <div class="col-sm-9 col-md-6 col-lg-5">
			    	<WorkHistory/>
			    </div>
			  </div>
			</div>
		)
	}
}

export default ProfilePage;
