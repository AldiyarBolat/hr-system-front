import React from 'react';

class ProfilePicture extends React.Component{
	render(){
		return (
			<div class="float-right">
				{/*<img className="avatar" src={this.props.person.profile_picture}/>*/}  
				<img className="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
			</div>
		)
	}
}

export default ProfilePicture
