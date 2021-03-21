
import React from 'react'

class Form extends React.Component{
 constructor(props){
   super(props)
   this.state ={
     id: Number((Math.random() * 10000000000000000).toString().split(".")[0]) * new Date().getSeconds(),
     title: '',
     subTitle: '',
     isCompleted: false
   }
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
 }
 handleChange(e){
   this.setState({
     [e.target.name]: e.target.value,
   })
 }
 handleSubmit(e){
     e.preventDefault()
     this.setState({
       id: Number((Math.random() * 10000000000000000).toString().split(".")[0]) * new Date().getSeconds()
     })
     this.props.addTodo(this.state)
   }
 render(){
   return (
     <div className="form-section">
       <h1>Add Todo Item</h1>
       <input
         type="text"
         value={this.state.title}
         name="title"
         onChange={this.handleChange}
         placeholder="Add Title"/>
       <input
         type="text"
         value={this.state.subTitle}
         name="subTitle"
         onChange={this.handleChange}
         placeholder="Add Subtitle"/>
       <button type="submit" onClick={this.handleSubmit}><strong>ADD TODO</strong></button>
     </div>
   )
 }
}

export default Form
