import React, {Fragment} from 'react';
import { Timeline, Event } from "react-timeline-scribble";
import WorkHistoryPosition from './WorkHistoryPosition'
import work_history_mock from './work_history_mock'


class WorkHistory extends React.Component{
	
	render(){
		const workHistoryComponents = work_history_mock.map(item => <WorkHistoryPosition item={item}/>)
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