export const ADD_TODO = 'ADD_TODO'
export const CLICK_TODO = 'CLICK_TODO'
export const CHANGE_FILTER = 'CHANGE_FILTER'

// 定数
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// アクション関数
export function addTodo(data) {
  return { type: ADD_TODO, data }
}

export function clickTodo(index) {
  return { type: CLICK_TODO, index }
}

export function changeFilter(filter) {
  return { type: CHANGE_FILTER, filter }
}
