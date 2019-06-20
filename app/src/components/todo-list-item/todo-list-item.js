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
                    <i class="material-icons circle">assistant_photo</i></span>
                <span
                    class={classNames}
                    onClick={onToggleDone}
    
                >{label}
                </span>
    
                <span
                    class="todo-item-delete-button secondary-content"
                    onClick={onDeleted}
    
                ><i class="material-icons">delete_forever</i></span>
            </React.Fragment>
                    
        )

    }
}