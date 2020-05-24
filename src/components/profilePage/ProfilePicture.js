import React from 'react';

class ProfilePicture extends React.Component{
	render(){
		return (
			<div class="float-right">
				<img className="avatar" src={this.props.picInfo.src}/>
			</div>
		)
	}
}

export default ProfilePicture
