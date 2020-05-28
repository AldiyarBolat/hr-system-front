import React from 'react';
import { Navbar,  Nav, Form, FormControl, Button} from 'react-bootstrap';

class MenuBar extends React.Component{
	render(){
		return (
			<Navbar bg="dark" variant="dark">
			    <Navbar.Brand href="/">Лого</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link href="/">Поиск</Nav.Link>
			    </Nav>
			  </Navbar>
		)
	}
}

export default MenuBar;
