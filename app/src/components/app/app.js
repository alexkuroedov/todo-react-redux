import React from 'react'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import ItemAddForm from '../item-add-form/item-add-form'
import './app.css'

const  App = () => {

        return (
            <div className="container todo-app">
                <AppHeader className="col ss12 ms4" />
                <div className="search-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList />
                <ItemAddForm />
            </div>
        )
}

export default  App
