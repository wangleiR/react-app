//this is about todomvc application use in the index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import todoApp from './redux/reducers'
import TodoMVCApp from './redux/TodoMVCApp'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import App from './App';
import Root from './middleware/containers/Root'
import registerServiceWorker from './registerServiceWorker';

//add logger middleware for test
const myLogger = store => next => action => {
    console.group(action.type);
    console.info('dispatching',action);
    let result = next(action);
    console.log('next state',store.getState());
    console.groupEnd(action.type);
    return result
};

let store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware,
        logger,//use logger from redux-logger
        myLogger, //use logger by me function
    )
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
                        <li><Link to='/redditAPI'>Reddit API</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/todoMVCApp" component={TodoMVCApp} />
                    <Route path="/redditAPI" component={Root} />
                </Switch>
            </div>
            </div>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();

