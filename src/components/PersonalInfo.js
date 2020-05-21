import React from 'react';
import ProfilePicture from './ProfilePicture';
import PersonInfo from './PersonInfo';


class PersonalInfo extends React.Component{
	render(){
		return (
			<div>

				<div class="modal-body row">
				  <div className="col-md-4">
				  	<ProfilePicture/>
				  </div>
				  <div className="col-md-8">
				  	<PersonInfo/>
				  </div>
				</div>
				
				
			</div>
		)
	}
}

export default PersonalInfo