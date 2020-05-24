import React, {Fragment} from 'react';
import { Timeline, Event } from "react-timeline-scribble";


class WorkHistory extends React.Component{
	render(){
		return (
			<div class="d-flex justify-content-center workHistory">
				<Fragment >
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
			  </div>
		)
	}
}

export default WorkHistory