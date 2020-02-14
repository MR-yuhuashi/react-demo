import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction.js'

class Main extends React.Component{
  onClick () {
    let text = this.refs.input;

    this.props.dispatch(addTodo({
      text: text.value
    }));
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <input type="text" ref="input" />
        <button onClick={() => {this.onClick()}}>提交</button>
        <ul>
          {
            this.props.todoList.map((item, index) => {
            return <li key={index}>{item.text}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    todoList: state.todoList
  })
)(Main);