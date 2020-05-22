import React from 'react';
import PersonInfoItem from './PersonInfoItem'
import mock_person_info from './mock_data';

class PersonInfo extends React.Component{
	render(){
		const personInfoItems = mock_person_info.map(item => <PersonInfoItem item={item}/>)
		return (
			<ul>
			  {personInfoItems}
			</ul>
		)
	}
}

export default PersonInfo
