import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, actions }) =>
    (
        <section className="main">

            <VisibleTodoList />
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