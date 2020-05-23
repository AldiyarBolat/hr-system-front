import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class PersonInfoItem extends React.Component{
	render(){
		return (
            <div className="personInfo">
                <ListGroup.Item>Name: {this.props.item.name}</ListGroup.Item>
                <ListGroup.Item>Positon: {this.props.item.position}</ListGroup.Item>
                <ListGroup.Item>Phone: {this.props.item.number}</ListGroup.Item>
                <ListGroup.Item>Email: {this.props.item.email}</ListGroup.Item>
                <ListGroup.Item>Age: {this.props.item.age}</ListGroup.Item>
                <ListGroup.Item>Work since: {this.props.item.work_since}</ListGroup.Item>
						</div>
		)
	}
}
export default PersonInfoItem;
