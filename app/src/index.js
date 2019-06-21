import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app/app'
import reducer from './reducer'
import { createStore } from 'redux'


let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>
    , document.getElementById('root'))
