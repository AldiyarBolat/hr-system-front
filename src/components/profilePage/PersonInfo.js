import React from 'react';
import mock_person_info from './mock_data';
import ListGroup from 'react-bootstrap/ListGroup';

class PersonInfo extends React.Component{

	constructor(props) {
	    super(props);
	    
    }

    componentDidMount(){
    	
    }

	render(){
		return (
			<div className="personInfo">
				{console.log(this.props.positions)}
                <ListGroup.Item>Name: {this.props.item.name + ' ' + this.props.item.lastname}</ListGroup.Item>
                <ListGroup.Item>Positon: {this.props.item.position}</ListGroup.Item>
                <ListGroup.Item>Phone: {this.props.item.phone_number}</ListGroup.Item>
                <ListGroup.Item>Email: {this.props.item.email}</ListGroup.Item>
                <ListGroup.Item>Age: {this.props.item.age}</ListGroup.Item>
                <ListGroup.Item>Work since: {this.props.item.work_since}</ListGroup.Item>
			</div>
		)
	}
}

export default PersonInfo
