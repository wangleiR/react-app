//this is about todomvc application use in the index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import todoApp from './redux/reducers'
import TodoMVCApp from './redux/TodoMVCApp'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//add logger middleware for test
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching',action);
    let result = next(action);
    console.log('next state',store.getState());
    console.groupEnd(action.type);
    return result
};

let store = createStore(
    todoApp,
    applyMiddleware(logger)
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/todoMVCApp'>ToDoMVC</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/todoMVCApp" component={TodoMVCApp} />
                </Switch>
            </div>
            </div>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();





