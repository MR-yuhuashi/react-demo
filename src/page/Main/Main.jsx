import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction.js'

class Main extends React.Component{
  onClick () {
    let text = this.refs.input;

    this.props.addClick({
      text: text.value
    });
  }

  render() {
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

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}

// 不传的时候，React-Redux会自动将dispatch注入组件的props
const mapDispatchToProps = (dispatch) => {
  return {
    addClick: (...rest) => {
      dispatch(addTodo(...rest))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);