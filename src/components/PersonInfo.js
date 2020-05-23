import React from 'react';
import PersonInfoItem from './PersonInfoItem'
import mock_person_info from './mock_data';

class PersonInfo extends React.Component{
	render(){
		const personInfoItems = <PersonInfoItem item = {this.props.item}/>;
		return (
			<ul>
			  {personInfoItems}
			</ul>
		)
	}
}

export default PersonInfo
