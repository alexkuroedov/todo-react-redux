import React from 'react'
import './app-header.css'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ state: state })

const AppHeader = ({ state }) => {

    const { todoData } = state

    const toDo = todoData.filter((item) => {
        return item.done !== true
    }).length

    const done = todoData.filter((item) => {
        return item.done !== false
    }).length
    
    return (
        <div className="app-header center-align">
            <div className="app-header-title">Todo List</div>
            <div>
                <span className="badge new blue" data-badge-caption="more to do">
                    {toDo}
                </span>
                <span className="badge new red" data-badge-caption="done">
                    {done}
                </span>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(AppHeader)