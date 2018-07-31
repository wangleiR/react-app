import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = (props) => {
    const {activeCount} = props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
        <footer className="footer" style={{
            display : activeCount === 0 ? 'none' : ''
        }} >
          <span className="todo-count">
            <strong>{activeCount || 'No'}</strong> {itemWord} left
          </span>
            <ul className="filters">
                <li>
                    <FilterLink filter="SHOW_ALL">
                        All
                    </FilterLink>
                    <FilterLink filter="SHOW_ACTIVE">
                        Active
                    </FilterLink>
                    <FilterLink filter="SHOW_COMPLETED">
                        Completed
                    </FilterLink>
                </li>
            </ul>
        </footer>
    )
}

export default Footer