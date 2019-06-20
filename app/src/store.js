import { createStore, combineReducers } from 'redux'
import { colors, sort } from './reducers'
import initialState from './initial-state'


const storeFactory = (initialState = initialState) => {

    createStore(combineReducers({ colors, sort }), initialState)
}

export default storeFactory

