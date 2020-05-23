import React from 'react';
import ProfilePicture from './ProfilePicture';
import PersonInfo from './PersonInfo';
import mock_person_info from './mock_data';
import image_src_mock from './image_src_mock';
import PersonCard from './PersonCard.js';

class PersonalInfo extends React.Component{
	render(){
		// const personInfoProcessed = mock_person_info.map(item => <PersonInfo item={item}/>);
		// const profilePictureProcessed = image_src_mock.map(item => <ProfilePicture picInfo={item}/>);
		var picAndInfoMerged = [];
		for (var i = 0;i < mock_person_info.length;i ++) {
			console.log(i);
			picAndInfoMerged.push(<PersonCard person = {mock_person_info[i]} img = {image_src_mock[i]}/>);
		}
		return (
			<div>
				{picAndInfoMerged}
			</div>
		)
	}
}

export default PersonalInfo
