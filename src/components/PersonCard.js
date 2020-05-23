import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';

class PersonCard extends React.Component{
	render(){
		return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img.src} />

              <Card.Title>{this.props.person.name}</Card.Title>

            <ListGroup className="list-group-flush">
              <ListGroupItem>Name: {this.props.person.name}</ListGroupItem>
              <ListGroupItem>Phone: {this.props.person.number}</ListGroupItem>
              <ListGroupItem>Email: {this.props.person.email}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Show More</Card.Link>
              <Card.Link href="#">Do something else</Card.Link>
            </Card.Body>
          </Card>
		)
	}
}

export default PersonCard;
