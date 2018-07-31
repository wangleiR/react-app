import React from 'react'
import PropTypes from 'prop-types'

// const Todo = ({onClick, completed, text }) => (
//     <li
//         onClick={onClick}
//         style={{
//             textDecoration : completed ? 'line-through' : 'none'
//         }}
//     >
//         {text}
//     </li>
// )
//
// Todo.propTypes = {
//     onClick : PropTypes.func.isRequired,
//     completed : PropTypes.bool.isRequired,
//     text : PropTypes.string.isRequired
// }
//
// export default Todo

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        //editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    }

    render() {
        const { todo, completeTodo, deleteTodo } = this.props

        let element
            element = (
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={todo.completed}
                           onChange={() => completeTodo(todo.id)} />
                    <label>
                        {todo.text}
                    </label>
                    <button className="destroy"
                            onClick={() => deleteTodo(todo.id)} />
                </div>
            )


        return (
            <li style={{
             textDecoration : todo.completed ? 'line-through' : 'none'
            }}>
                {element}
            </li>
        )
    }
}
