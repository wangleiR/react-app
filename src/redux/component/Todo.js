import React from 'react'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    };

    render() {
        const { todo, completeTodo, deleteTodo } = this.props

        let element = (
                <div className="view">
                    <input className="toggle input"
                           type="checkbox"
                           checked={todo.completed}
                           onChange={() => completeTodo(todo.id)} />
                    <label>
                        {todo.text}
                    </label>
                    <button className="destroy"
                            onClick={() => deleteTodo(todo.id)} />
                </div>
            );

        return (
            <li style={{
             textDecoration : todo.completed ? 'line-through' : 'none'
            }}>
                {element}
            </li>
        )
    }
}
