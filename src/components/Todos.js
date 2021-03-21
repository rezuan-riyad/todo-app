import React from 'react'
import Todo from './Todo'

class Todos extends React.Component{

	render(){
		const todos = this.props.todos
		const deleteTodo = this.props.deleteTodo
		return todos.map(todo => {
			return (
			<div key={todo.id}>
				<Todo todo={todo} deleteTodo={deleteTodo}/>
				<hr />
			</div>
			)
		})
	}
}

export default Todos
