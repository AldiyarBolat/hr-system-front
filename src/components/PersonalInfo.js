import React from 'react';
import ProfilePicture from './ProfilePicture';
import PersonInfo from './PersonInfo';
import mock_person_info from './mock_data';
import image_src_mock from './image_src_mock';

class PersonalInfo extends React.Component{
	render(){
		const personInfoProcessed = mock_person_info.map(item => <PersonInfo item={item}/>);
		const profilePictureProcessed = image_src_mock.map(item => <ProfilePicture picInfo={item}/>);
		var picAndInfoMerged = [];
		for (var i = 0;i < personInfoProcessed.length;i ++) {
			console.log(i);
			picAndInfoMerged.push(<div class="modal-body row">
									<div className="col-md-5">
										{profilePictureProcessed[i]}
									</div>
									<div className="col-md-7">
										{personInfoProcessed[i]}
									</div>
								  </div>);
		}

		return (
			<div>
				{picAndInfoMerged}

			</div>
		)
	}
}

export default PersonalInfo
