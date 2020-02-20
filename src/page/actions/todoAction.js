import { ADD_TODO } from './actionTypes';

// action床架函数返回一个action
export const addTodo = (obj) => {
  return {
    type: ADD_TODO,
    obj
  }
}