import React from 'react';
import StaffItem from './StaffItem'
import { MDBCol, MDBIcon } from "mdbreact";

class Staff extends React.Component{
	render(){
    const staffList = this.props.list.map(item => <StaffItem item={item}/>)
		return (
			<ul>
			  {staffList}
			</ul>
		)
  }
}

export default Staff;
