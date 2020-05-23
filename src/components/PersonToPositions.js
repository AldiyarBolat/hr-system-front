import React, {Fragment} from 'react';
import PersonToPosition from './PersonToPosition'
import { Timeline, Event } from "react-timeline-scribble";


class PersonToPositions extends React.Component{
	render(){
		return (
			<Fragment>
			    <Timeline>
			      <Event interval={"2016 – 2018"} title={"Designer"}>
			        Job deskription hereadd
			        Job deskription hereadd
			        Job deskription hereadd
			      </Event>
			      <Event interval={"2015 – 2016"} title={"Intern"}>
			        Job deskription hereadd
			        Job deskription hereadd
			        Job deskription hereadd
			      </Event>
			    </Timeline>
			  </Fragment>

			/*<ul class="list-group personToPosition">
			  <PersonToPosition/>
			  <PersonToPosition/>
			  <PersonToPosition/>
			</ul>*/
		)
	}
}

export default PersonToPositions