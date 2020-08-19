import React ,{Component} from 'react';
import Todoinput from './Components/Todoinput/Todoinput';
import Todolist from './Components/Todolist/Todolist';
import uuid from "uuid";
import './App.css';

class App extends Component{
  state={
    item: '',
    id: uuid(),
    todolist: [],
    editItem : false
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
    console.log(this.state.item)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      itemContent: this.state.item
    }
    const newTodolist = [...this.state.todolist,newItem]
    this.setState({
      todolist : newTodolist,
      item: '',
      id: uuid(),
      editItem: false
    })
  }

  handleDelete = (id) => {
    const filter = this.state.todolist.filter((item)=>item.id !== id);
    this.setState({
      todolist : filter
    })
  }

  handleEdit = (id) => {
    const selectItem = this.state.todolist.find(item=>item.id === id);
    const filter = this.state.todolist.filter((item)=>item.id !== id);
    this.setState({
      todolist:filter,
      id:id,
      item: selectItem.itemContent,
      editItem: true
    })
  }

  render(){
    return(
      <div className="container">
        <div className="box">
          <h1>todoList</h1>
          <Todoinput 
            value={this.state.item}
            change={this.handleChange}
            submit={this.handleSubmit}
            edit={this.state.editItem}
          />
          <Todolist 
            list={this.state.todolist}
            delete={this.handleDelete}
            edit={this.handleEdit}
          />
        </div>
      </div>
    )
  }
}

export default App;