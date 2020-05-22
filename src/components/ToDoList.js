import React from 'react';
import ToDoItem from './ToDoItem';
import to_do_list_data from './to_do_list_data'

// function ToDoList(){
// 	const toDoListItems = to_do_list_data.map(item => <ToDoItem key={item.id} item={item}/>)

// 	return (
// 		<ul>
// 		  {toDoListItems}
// 		</ul>
// 	)
// }

class ToDoList extends React.Component{
	render(){
		const toDoListItems = to_do_list_data.map(item => <ToDoItem key={item.id} item={item}/>)
		return (
			<ul>
			  {toDoListItems}
			</ul>
		)
	}
}

export default ToDoList;
