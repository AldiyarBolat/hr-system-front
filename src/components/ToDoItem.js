import React from 'react';


// function ToDoItem(props){
// 	return (
// 		<li className="toDoItem"><input type="checkbox" checked={props.item.completed}/>{props.item.description}</li>
// 	)
// }


class ToDoItem extends React.Component{
	render(){
		return (
			<li className="toDoItem"><input type="checkbox" checked={this.props.item.completed}/>
				{this.props.item.description}
			</li>
		)
	}
}

export default ToDoItem