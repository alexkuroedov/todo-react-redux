import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({
    todos, onDeleted,
    onToggleImportant,
    onToggleDone }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return (
            <li key={id} className="list-group-item collection-item avatar">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        )
    })

    return (
            <ul className="todo-list collection">
                {elements}
            </ul>
    )
}

export default TodoList