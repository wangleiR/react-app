import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import MainSection from '../containers/MainSection'


const App = () => (
    <div>
        <AddTodo/>
        {/*<VisibleTodoList/>*/}
        {/*<Footer/>*/}
        <MainSection/>
    </div>
)

export default App