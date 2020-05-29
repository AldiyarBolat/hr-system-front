import React, {Fragment} from 'react';
import { Timeline, Event } from "react-timeline-scribble";
import WorkHistoryPosition from './WorkHistoryPosition'


class WorkHistory extends React.Component{
	
	render(){
		if (this.props.workHistory == null) return <h1>Loading ...</h1>;

		const workHistoryComponents = this.props.workHistory.map(workInterval =>
		 <WorkHistoryPosition workInterval={workInterval}/>)

		return (
			<div class="d-flex justify-content-center workHistory">
				<Fragment >
				    <Timeline>
				      {workHistoryComponents}
				    </Timeline>
				  </Fragment>
			  </div>
		)
	}
}

export default WorkHistory