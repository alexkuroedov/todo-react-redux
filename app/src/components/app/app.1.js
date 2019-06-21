import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {addItem}  from '../../actions'

// import AppHeader from '../app-header/app-header'
// import SearchPanel from '../search-panel/search-panel'
// import TodoList from '../todo-list/todo-list'
// import ItemStatusFilter from '../item-status-filter/item-status-filter'
// import ItemAddForm from '../item-add-form/item-add-form'
import './app.css'

export default class App extends Component {

    
    // console.log(state)
    render = () => {
        const { store, addItem } = this.props

        return (
            <div className="container todo-app">
                {/* <AppHeader className="col ss12 ms4" /> */}
                <div className="search-panel" onClick={addItem}>
                    {/* <SearchPanel /> */}
                    {/* <ItemStatusFilter /> */}
                </div>
                {/* <TodoList /> */}
                {/* <ItemAddForm /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        addItem: () => {
            const randomValue = Math.floor(Math.random() * 10)
            dispatch(addItem(randomValue))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)