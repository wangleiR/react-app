import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({todosCount, actions}) =>
    (
        <section className="main">
            {
                <span>
                    <button onClick={actions.completeAllTodos}>>>></button>
                </span>
            }

            <VisibleTodoList/>

            {
                <Footer
                    activeCount={todosCount}
                />
            }
        </section>
    )

MainSection.propTypes = {
    todosCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}


export default MainSection;