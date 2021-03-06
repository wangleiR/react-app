import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions  from '../actions'
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t=> !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return{
        todos : getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return{
        actions : bindActionCreators(TodoActions,dispatch)
    }
}


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList