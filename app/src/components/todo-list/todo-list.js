import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'


const mapStateToProps = (state) => ({ state: state })

const TodoList = ({ state }) => {

    const todos = state.todoData
        .filter((item) => {
            if (state.filter === 'active') {
                return item.done === false
            }
            if (state.filter === 'done') {
                return item.done === true
            }
            return true
        })
        .filter((item) => {
            const { term } = state
            if(term.length === 0){
                return true
            } 
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })



    const elements = todos.map((item) => {
        const { id } = item
        return <TodoListItem key={id} {...item} />
    })

    return (
        <ul className="todo-list collection">
            {elements}
        </ul>
    )
}

export default connect(mapStateToProps)(TodoList)