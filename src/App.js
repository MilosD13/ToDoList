import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./TodosData"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render(){
    const todoItems = this.state.todos.map(task => <ToDoItem key={task.id} item={task} 
    handleChange={this.handleChange} />)
    return(
      <div className="todo-list">
      {todoItems}
      </div>
    )
  }
}

export default App;