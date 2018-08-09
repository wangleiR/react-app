import { combineReducers } from 'redux'
import {
    VisibilityFilters,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILLER,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED
} from './actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter( state = SHOW_ALL ,action) {
    switch (action.type) {
        case SET_VISIBILITY_FILLER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })

        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, text: action.text } :
                    todo
            )

        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, completed: !todo.completed } :
                    todo
            )

        case COMPLETE_ALL_TODOS:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false)

        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
})

export default todoApp
