import React from 'react';
import './App.css' ;


const Todolist =(props)=>{	
	const todos = props.tasks.map((todo ,index) => {
		return <Todo content={todo} key ={index} id ={index} onDelete={props.onDelete} oncomplete={props.oncomplete} />
	}) ;


	return (
			<div className="Todolist">
				{todos}
			</div>
		);
	
}
export default Todolist ;


class Todo extends React.Component{

	render(){
		return (
				<div className="TodoItem">
					<input type='checkbox' onChange= {()=> {this.props.oncomplete(this.props.id)}} 
											defaultChecked={this.props.content.completed} />{' '}
					<span className='Text' style={{ textDecoration: this.props.content.completed ? 'line-through':'inherit'}}>
						{this.props.content.text} 
					</span>   
					<button  onClick= {()=>{this.props.onDelete(this.props.id)}} className="close">
													<span aria-hidden="true">&times;</span>
					</button>
				</div>
			);
	}
}
