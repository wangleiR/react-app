import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts,fetchPostsIfNeeded } from "./action";
import rootReducer from './reduces'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
store.dispatch(selectSubreddit('react.js'))
store.dispatch(fetchPosts('react.js'))
    .then(
        ()=>console.log(store.getState())
    )
store.dispatch(fetchPostsIfNeeded(('react.js'))
    .then(
        ()=>console.log(store.getState()))
    )