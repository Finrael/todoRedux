import React from 'react';
import { connect } from 'react-redux';


class toDo extends React.Component{
    constructor(props){
        super (props);
        this.state={
            userInput:''
        }
    }
    handleInput = (e)=>{
        this.setState({userInput:e.target.value})
    }
    handleDispatch = ()=>{
        console.log('blablaa',this.state.userInput)
      this.props.addTodo(this.state.userInput)
    }
    renderList = () => {
        let auxArr=[];
        auxArr = this.props.todos.todos;
        return this.props.todos ?auxArr.map((task, idx) =>
        <div key={idx}>{task}</div>
        ) : "";
    }

render(){
    return(
        <div>
            <input type='text' placeholder ='your task here'onChange={this.handleInput}/>
            <input type='button' value='Add Task' onClick={this.handleDispatch}/>
            {this.renderList()}
        </div>
    )
}
}
const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addTodo: (inputText)=>{
            dispatch({
                type:'ADD_TODO', text:inputText
            })
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(toDo)