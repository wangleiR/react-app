/**
 * action type
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILLER = 'SET_VISIBILITY_FILLER';

export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/**
 * action create function
 */
export function addTodo(text) {
    return{
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return{
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILLER,
        filter
    }
}


export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })