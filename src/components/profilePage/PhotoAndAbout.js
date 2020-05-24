import React from 'react';
import ProfilePicture from './ProfilePicture';
import PersonInfo from './PersonInfo';
import mock_person_info from './mock_data';
import image_src_mock from './image_src_mock';

class PhotoAndAbout extends React.Component{
	render(){
		return (
			<div class="container-fluid photoAndAbout align-self-center">
			  <div class="row">
			    <div class="col-sm-3 col-md-6 col-lg-5">
			    	<ProfilePicture picInfo={image_src_mock[0]}/>
			    </div>
			    <div class="col-sm-9 col-md-6 col-lg-7">
			    	<PersonInfo item={mock_person_info[0]}/>
			    </div>
			  </div>
			</div>
		)
	}
}

export default PhotoAndAbout
