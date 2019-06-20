import { createStore } from 'redux'
import reducer from './reducer'

let initialState = {

    todoData: [],
    term: '',
    filter: 'all'
}

const storeFactory = () => {

    return createStore(reducer, initialState)
}

export default storeFactory

