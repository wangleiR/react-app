import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <div >
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo = {todo}
                    // onClick={() => onTodoClick(index) }
                    {...onTodoClick}
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
    onTodoClick: PropTypes.object.isRequired
}

export default TodoList