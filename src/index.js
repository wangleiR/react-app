// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
import App from './redux/component/App'
import './redux/index.css'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)