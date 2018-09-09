import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../index.css'
import Header from '../Components/BodyComponents/header'
import TodoInput from '../Components/BodyComponents/todoInput'
import TodoItem from '../Components/BodyComponents/todoItem'
import { putNotesToState } from '../Actions/actions'

class BodyNotesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Learn AWS"},
        {id: 1, text: "Improve Node.js skill"},
        {id: 2, text: "Create some more React App"}
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: this.state.nextId+1
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }
  saveOnClick(){
    console.log('salvam',this.state.todos)
    this.props.putNotesToState(this.state.todos)
  }
  render() {
    return (
      <div className="bodyNotes">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.props.userNotes.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
          <button onClick={this.saveOnClick()}>Save</button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({userNotes:state.userNotes})
let mapDispatchToProps = {putNotesToState}

export default connect(mapStateToProps,mapDispatchToProps)(BodyNotesPage)