import React, {Fragment} from 'react';
import { Timeline, Event } from "react-timeline-scribble";


class WorkHistory extends React.Component{
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
		)
	}
}

export default WorkHistory