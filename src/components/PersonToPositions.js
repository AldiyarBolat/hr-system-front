import React from 'react';
import PersonToPosition from './PersonToPosition'

class PersonToPositions extends React.Component{
	render(){
		return (
			<ul class="list-group personToPosition">
			  <PersonToPosition/>
			  <PersonToPosition/>
			  <PersonToPosition/>
			</ul>
		)
	}
}

export default PersonToPositions