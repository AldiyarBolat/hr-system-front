import React from 'react';
import ProfilePicture from './ProfilePicture';
import WorkHistory from './WorkHistory'
import PersonInfo from './PersonInfo';
import axios from 'axios';

import mock_person_info from './mock_data'
import image_src_mock from './image_src_mock';


class ProfilePage extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      person: "",
	    };
    }

    componentDidMount(){
    	fetch("http://127.0.0.1:8000/api/view_staff/?staff_id=1")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					person: result,
				});
		},
		(error) => {
			this.setState({
				error
				});
			}
		)
    }

	render(){
		return (
			<div className="container-fluid photoAndAbout align-self-center">
			  <div className="row">
			    <div className="col-sm-3 col-md-6 col-lg-3">
			    	<ProfilePicture person={this.state.person}/>
			    </div>
			    <div className="col-sm-9 col-md-6 col-lg-4">
			    	<PersonInfo item={this.state.person}/>
			    </div>
			    <div className="col-sm-9 col-md-6 col-lg-5">
			    	<WorkHistory workHistory={this.state.person.positions}/>
			    </div>
			  </div>
			</div>
		)
	}
}

export default ProfilePage;
