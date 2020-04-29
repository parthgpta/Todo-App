import React from 'react';
import './App.css' ;
//import 'bootstrap/dist/css/bootstrap.css';

class Submitform extends React.Component {
  state = { 
  			text: '' , 
  			completed: false 
  		 };  

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') return;
    this.props.onFormSubmit(this.state);
    this.setState({ text: '' });
  } ;

   render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Add a task'
          value={this.state.text}
          onChange={(e) => this.setState({text: e.target.value})}
           className="form-control form-sub-01"
        /><hr/>
        <button className='btn btn-primary'>Add it</button>
      </form>
    );
  }
}

export default Submitform ;