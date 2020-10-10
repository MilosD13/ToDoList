import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./TodosData"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }
  render(){
    const todos = this.state.todos.map(task => <ToDoItem item={task} />)
    return(
      <div className="todo-list">
      {todos}
      </div>
    )
  }
}

export default App;