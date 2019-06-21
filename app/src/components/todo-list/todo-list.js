import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const TodoList = ({state}) => {
    
    const todos = state.todoData

    const elements = todos.map((item) => {
        const { id } = item
        return (
            // <li key={id} className="list-group-item collection-item avatar">
                <TodoListItem key={id} {...item} />
            // </li>
        )
    })

    return (
            <ul className="todo-list collection">
                {elements}
            </ul>
    )
}

export default connect(mapStateToProps)(TodoList)