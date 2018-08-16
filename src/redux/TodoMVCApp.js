import React from 'react'
import AddTodo from './containers/AddTodo'
import MainSection from './containers/MainSection'
import './index.css'

const TodoMVCApp = () => (
    <div className="body-style">
        <AddTodo/>
        <MainSection/>
    </div>
)

export default TodoMVCApp