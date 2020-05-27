import React from 'react';
import ProfilePicture from './ProfilePicture';
import WorkHistory from './WorkHistory'
import PersonInfo from './PersonInfo';
import axios from 'axios';

import mock_person_info from './mock_data'
import image_src_mock from './image_src_mock';


class ProfilePage extends React.Component{
	state = {
    is_profile: true
  };
	render(){
		axios({
			method: 'get',
			url: 'http://127.0.0.1:8000/api/view_staff/',
			params: {
				"staff_id": 1
			},
		}).then((response) => {
				console.log(response);
				// this.setState({staff: response['data']['staff'], loading: false});
				// console.log(response['data']['staff']);
			}, (error) => {
				console.log(error);
			});
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
