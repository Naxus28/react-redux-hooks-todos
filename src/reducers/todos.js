import ActionTypes from "../actions/actionTypes";

const initialState = {
  todos: [],
  processing: false,
  error: null
};


export default function(state = initialState, action) {
  switch (action.type) {
    // get todos
    case ActionTypes.GET_TODOS_SUCCESS:
    case ActionTypes.ADD_TODO_SUCCESS:
    case ActionTypes.DELETE_TODO_SUCCESS:
    case ActionTypes.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        ...{ todos: action.data, processing: false }
      };
    case ActionTypes.GET_TODOS_FAILURE:
    case ActionTypes.ADD_TODO_FAILURE:
    case ActionTypes.DELETE_TODO_FAILURE:
    case ActionTypes.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        ...{ error: action.data, processing: false }
      };
    case ActionTypes.GET_TODOS_PROCESSING:
    case ActionTypes.ADD_TODO_PROCESSING:
    case ActionTypes.DELETE_TODO_PROCESSING:
    case ActionTypes.TOGGLE_TODO_PROCESSING:
      return {
        ...state,
        processing: true
      };

    default:
      return state;
  }
}