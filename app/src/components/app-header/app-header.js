import React from 'react'
import './app-header.css'

const AppHeader = ({ toDo, done }) => {
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

export default AppHeader