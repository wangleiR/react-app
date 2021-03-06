import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch}) => {
    let input;
    return(
        <div>
            <h1 className="h1">todos</h1>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input
                    className="input"
                    ref = {node => {
                        input = node
                    }}
                />
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo