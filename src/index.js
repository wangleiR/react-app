//this is about todomvc application use in the index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
import App from './redux/component/App'
import './redux/index.css'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Root from './redux/component/Root'

import './index.css';
import Bpp from './App';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(todoApp)

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
            {/*<switch>*/}
                <Route exact path="/" component={Bpp} />
                <Route path="/app" component={App} />
            {/*</switch>*/}
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();





