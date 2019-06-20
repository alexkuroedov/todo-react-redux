import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app/app'
import storeFactory from './store'


let store = storeFactory()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))

//Todo React Context