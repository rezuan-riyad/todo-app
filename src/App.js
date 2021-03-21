import React from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import Form from './components/Form'

import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      todos : [
        {
          id: 1,
          title: "Going to hospital",
          subTitle: "Lorem ispsum ",
          isCompleted: true
        },
        {
          id: 2,
          title: "Task Two",
          subTitle: "Less Important ",
          isCompleted: false
        },
        {
          id: 3,
          title: "Very Important",
          subTitle: "Top priority ",
          isCompleted: true
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addTodo(todo){
    const todos = this.state.todos
    let newTodos = [...todos, todo]
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo(id){
    const filteredTodos = this.state.todos.filter((todo)=>{
      return todo.id != id
    })
    this.setState({ todos: filteredTodos})
  }

  render(){
    return(
      <div className="content">
        <Header />
        { this.state.todos.length == 0 ? (<p>Nothing to display</p>) : null}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
