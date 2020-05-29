import React, {Fragment} from 'react';
import { Event } from "react-timeline-scribble";


class WorkHistoryPosition extends React.Component{
	render(){
		if (this.props.workInterval == null) return <h1>Loading ...</h1>;

		return (
			<div>
		      <Event interval={this.props.workInterval.start_date + " " + this.props.workInterval.start_date } title={this.props.workInterval.position.name}>
		        {this.props.workInterval.position.description}
		      </Event>
			</div>
		)
	}
}

export default WorkHistoryPosition