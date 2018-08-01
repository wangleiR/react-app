import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, actions }) => (
    <div >
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo = {todo}
                    {...actions}
                />
            ))}
        </ul>
    </div>
)

TodoList.propTypes = {
    todos : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            completed : PropTypes.bool.isRequired,
            text : PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    actions: PropTypes.object.isRequired
}

export default TodoList