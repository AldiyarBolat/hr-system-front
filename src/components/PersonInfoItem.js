import React from 'react';
class PersonInfoItem extends React.Component{
	render(){
		return (
      <div className="col-md-8">
        <h2>Name: {this.props.item.name}</h2>
        <h3>Positon: {this.props.item.position}</h3>
        <h3>Phone: {this.props.item.number}</h3>
        <h3>Email: {this.props.item.email}</h3>
        <h3>Age: {this.props.item.age}</h3>
        <h3>Work since: {this.props.item.work_since}</h3>
			</div>
		)
	}
}
export default PersonInfoItem;
