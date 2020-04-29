import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist' ;
import Header from './Header' ; 
import Submitform from './Submitform' ;
import { BrowserRouter, Route, Link, browserHistory, IndexRoute ,Switch } from 'react-router-dom' ;


class App extends Component{
  constructor(){
    super();
    this.state = {
      tasks :[
              
        ] 
      }
    }

delete = (index) =>{
    const arr = [...this.state.tasks];
    arr.splice(index ,1);
    this.setState({tasks : arr}) ;
}

handleSubmit = (task) => {
  this.setState({tasks: [...this.state.tasks, task]});
}

compeltetask = (index) =>{
    this.setState({
      tasks : this.state.tasks.map( (task,id) =>{
        if(id == index){
            task.completed = !task.completed
        }
        return task;
      })
    });
}


  render(){
      return ( 
                <div className='App'>
                <Header tasks = {this.state.tasks} /><hr />
                <div className='Mainapp'>
                  <Todolist tasks = {this.state.tasks} onDelete={this.delete} oncomplete={this.compeltetask} /><br/>
                  <Submitform onFormSubmit={this.handleSubmit} />
                </div>
                </div>

              ) ;
  }
}



export default App;
