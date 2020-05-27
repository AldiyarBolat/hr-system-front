import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class StaffItem extends React.Component{
	render(){
		const host = "http://127.0.0.1:8000";
		return (
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={host + this.props.item.profile_picture}/>
			  <Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>{this.props.item.name}</ListGroup.Item>
					<ListGroup.Item>{this.props.item.lastname}</ListGroup.Item>
				</ListGroup>
			  </Card.Body>
			</Card>
		)
	}
}
export default StaffItem;
