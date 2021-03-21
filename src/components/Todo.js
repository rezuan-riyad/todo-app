import React from 'react'
import '../todo.css'

class Todo extends React.Component{
	constructor(props){
		super(props)
		this.state = this.props.todo
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(){
		this.setState({ isCompleted : !this.state.isCompleted})
	}
	render(){
		return (
			<div className="todo">
				<div className="todo-content">
					<div className={"bar " + (this.state.isCompleted ? 'bg-green' : 'bg-red')}></div>
					<div>
						<h3>{this.state.title}</h3>
						<p>{this.state.subTitle}</p>
						<p>{this.state.isCompleted}</p>
					</div>
				</div>
				<div className="icons">

  					<label className="custom-checkbox">
  						<input type="checkbox" checked={this.state.isCompleted} onChange={this.handleChange}/>
  						<span className="checkmark"></span>
  					</label>

					<i className={"fa fa-trash " +(this.state.isCompleted ? 'red' : 'gray')}
						aria-hidden="true"
						onClick={()=>this.props.deleteTodo(this.state.id)}>
					</i>
				</div>
			</div>
		)
	}
}

export default Todo
