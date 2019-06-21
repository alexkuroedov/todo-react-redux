import React from 'react'
import './todo-list-item.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'


const mapStateToProps = (state) => {
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {

    const { onToggleImportant, onToggleDone, onDeleted } = bindActionCreators(actions, dispatch)

    return {
        onToggleImportant: (id) => {
            onToggleImportant(id)
         },
        onToggleDone: (id) => {
            onToggleDone(id)
        },
        onDeleted: (id) => {
            onDeleted(id)
        }
    }
}

const TodoListItem = ({ state, onToggleDone, onToggleImportant, onDeleted, ...props }) => {


    const { id, label, important, done } = props

    let classNames = 'todo-item-label title'
    if (done) {
        classNames += ' done'
    }
    if (important) {
        classNames += ' important'
    }

    return (

            <li className="list-group-item collection-item avatar">
                <span
                    className="todo-item-important-button"
                    onClick={() => onToggleImportant(id)}
                >
                    <i className="material-icons circle">assistant_photo</i></span>
                <span
                    className={classNames}
                    onClick={() => onToggleDone(id)}
                >{label}
                </span>

                <span
                    className="todo-item-delete-button secondary-content"
                    onClick={() => onDeleted(id)}
                ><i className="material-icons">delete_forever</i></span>
            </li>

    )

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)