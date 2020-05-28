import React from 'react';
import StaffItem from './StaffItem'
import { MDBCol, MDBIcon } from "mdbreact";
import CardColumns from 'react-bootstrap/CardColumns'

class Staff extends React.Component{
	render(){
    const staffList = this.props.list.map(item => <StaffItem item={item}/>)
		return (
			<CardColumns>
			  {staffList}
			</CardColumns>
		)
  }
}

export default Staff;
