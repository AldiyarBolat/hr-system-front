import React from 'react';
class StaffItem extends React.Component{
	render(){
		return (
			<li>
				{this.props.item.name}
			</li>
		)
	}
}
export default StaffItem;
