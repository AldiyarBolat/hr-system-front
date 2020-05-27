import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class StaffItem extends React.Component{
	render(){
		return (
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src="https://i.stack.imgur.com/34AD2.jpg" />
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
