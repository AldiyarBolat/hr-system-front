import React, {Fragment} from 'react';
import { Event } from "react-timeline-scribble";


class WorkHistoryPosition extends React.Component{
	render(){
		return (
			<div>
		      <Event interval={this.props.item.interval} title={this.props.item.title}>
		        {this.props.item.description}
		      </Event>
			</div>
		)
	}
}

export default WorkHistoryPosition