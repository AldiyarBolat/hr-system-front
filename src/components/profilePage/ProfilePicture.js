import React from 'react';
import Card from 'react-bootstrap/Card';


class ProfilePicture extends React.Component{
	render(){
		const host = "http://127.0.0.1:8000";

		return (
			<div class="float-right">
				<img className="avatar" src={host + this.props.person.profile_picture}/>
			</div>
		)
	}
}

export default ProfilePicture
