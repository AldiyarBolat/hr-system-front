import React, {Fragment} from 'react';
import { Event } from "react-timeline-scribble";


class WorkHistoryPosition extends React.Component{
	render(){
		if (this.props.workInterval == null) return <h1>Loading ...</h1>;
		const interval_ =   this.props.workInterval.start_date[0] + 
							this.props.workInterval.start_date[1]+
							this.props.workInterval.start_date[2]+
							this.props.workInterval.start_date[3] + "-" +
							this.props.workInterval.end_date[0] + 
							this.props.workInterval.end_date[1]+
							this.props.workInterval.end_date[2]+
							this.props.workInterval.end_date[3]

		return (
			<div>
				{console.log(interval_)}
		      <Event interval={interval_} title={this.props.workInterval.position.name}>
		        {this.props.workInterval.position.description}
		      </Event>
			</div>
		)
	}
}

export default WorkHistoryPosition