import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {addItem}  from '../../actions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { inc, dec, rnd, addItem } from '../../actions'
import * as actions from '../../actions' 

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import ItemAddForm from '../item-add-form/item-add-form'
import './app.css'

const App = ({ state, inc, dec, rnd, add, remove }) => {

        return (
            <div className="container todo-app">
                <h1>{state.filter}</h1>
                <AppHeader className="col ss12 ms4" />
                <div className="search-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <button onClick={remove}>remove</button>
                <TodoList />
                <ItemAddForm />
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

//another variant
const mapDispatchToProps =  (dispatch) => {

    const { inc, dec, rnd, addItem, removeItem } = bindActionCreators(actions, dispatch)

    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10)
            return rnd(randomValue)
        },
        add: () => {
            const label = 'Hello World'
            addItem(label)
        },
        remove: () => {
            const id = 103
            return removeItem(id)
        }   
    }
}

//can pass the Object to the second parameter, if without problems
export default connect(mapStateToProps, mapDispatchToProps)(App)