import { combineReducers } from 'redux'
import { ADD_TODO, CLICK_TODO, CHANGE_FILTER, VisibilityFilters } from './actions'

function filters(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      if (action.text.length < 1) {
        return state
      }
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case CLICK_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: !state[action.index].completed
        }),
        ...state.slice(action.index+1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  filters,
  todos,
})

export default todoApp
