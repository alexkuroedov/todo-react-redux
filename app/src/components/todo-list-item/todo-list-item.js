import React, { Component } from 'react'
import './todo-list-item.css'


export default class TodoListItem extends Component {

    render = () => {
        const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            important, done } = this.props

        let classNames = 'todo-item-label title'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        return (

            <React.Fragment>
                <span
                    className="todo-item-important-button"
                    onClick={onToggleImportant}
                >
                    <i className="material-icons circle">assistant_photo</i></span>
                <span
                    className={classNames}
                    onClick={onToggleDone}
    
                >{label}
                </span>
    
                <span
                    className="todo-item-delete-button secondary-content"
                    onClick={onDeleted}
    
                ><i className="material-icons">delete_forever</i></span>
            </React.Fragment>
                    
        )

    }
}