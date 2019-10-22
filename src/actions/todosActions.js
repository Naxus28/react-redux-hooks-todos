import ActionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from '../config/global.config';

// get todos
const todosProcessing = () => ({
  type: ActionTypes.GET_TODOS_PROCESSING
});

const todosSuccess = ({ data }) => ({
  type: ActionTypes.GET_TODOS_SUCCESS,
  data
});

const todosFailure = ({ response: { data } }) => ({
  type: ActionTypes.GET_TODOS_FAILURE,
  data
});

export const getTodos = () => {
  return async(dispatch, getState) => {
    dispatch(todosProcessing());

    try {
      const result = await axios.get(`${baseUrl}/todos`);
      dispatch(todosSuccess(result));
    } catch(e) {
      dispatch(todosFailure(e))
    }
  };
};

// add todos
const addTodoProcessing = () => ({
  type: ActionTypes.ADD_TODO_PROCESSING
});

const addTodoSuccess = ({ data }) => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  data
});

const addTodoFailure = ({ response: { data } }) => ({
  type: ActionTypes.ADD_TODO_FAILURE,
  data
});

export const addTodo = todo => {
  return async(dispatch, getState) => {
    dispatch(addTodoProcessing());

    try {
      const response = await axios.post(`${baseUrl}/todos`, todo);
      dispatch(addTodoSuccess(response));
    } catch(e) {
      dispatch(addTodoFailure(e))
    }
  };
};

// delete todo
const deleteTodoProcessing = () => ({
  type: ActionTypes.DELETE_TODO_PROCESSING
});

const deleteTodoSuccess = ({ data }) => ({
  type: ActionTypes.DELETE_TODO_SUCCESS,
  data
});

const deleteTodoFailure = ({ response: { data } }) => ({
  type: ActionTypes.DELETE_TODO_FAILURE,
  data
});

export const deleteTodo = id => {
  return async(dispatch, getState) => {
    dispatch(deleteTodoProcessing());

    try {
      const response = await axios.delete(`${baseUrl}/todos/${id}`);
      dispatch(deleteTodoSuccess(response));
    } catch(e) {
      dispatch(deleteTodoFailure(e))
    }
  };
};

// toggle todo
const toggleTodoProcessing = () => ({
  type: ActionTypes.TOGGLE_TODO_PROCESSING
});

const toggleTodoSuccess = ({ data }) => ({
  type: ActionTypes.TOGGLE_TODO_SUCCESS,
  data
});

const toggleTodoFailure = ({ response: { data } }) => ({
  type: ActionTypes.TOGGLE_TODO_FAILURE,
  data
});

export const toggleTodo = (id, todo) => {
  return async(dispatch, getState) => {
    dispatch(toggleTodoProcessing());

    try {
      const response = await axios.put(`${baseUrl}/todos/${id}`, todo);
      dispatch(toggleTodoSuccess(response));
    } catch(e) {
      dispatch(toggleTodoFailure(e))
    }
  };
};


