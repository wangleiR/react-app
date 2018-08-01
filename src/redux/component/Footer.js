import React from 'react'
import FilterLink from '../containers/FilterLink'

const SHOW_ALL = 'SHOW_ALL'
const SHOW_COMPLETED = 'SHOW_COMPLETED'
const SHOW_ACTIVE = 'SHOW_ACTIVE'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
}

const Footer = (props) => {
    const { activeCount } = props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
        <footer
            className="footer"
            style={{display : activeCount === 0 ? 'none' : ''}}
        >
          <span className="todo-count">
            <strong>{activeCount || 'No'}</strong> {itemWord} left
          </span>
            <ul className="filters">
                {
                    Object.keys(FILTER_TITLES).map(filter =>
                    <li key={filter}>
                        <FilterLink filter={filter}>
                            {FILTER_TITLES[filter]}
                        </FilterLink>
                    </li>
                    )
                }
            </ul>
        </footer>
    )
}

export default Footer