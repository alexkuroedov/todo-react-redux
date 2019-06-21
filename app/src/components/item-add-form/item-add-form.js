import React from 'react'
import './item-add-form.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'


const mapStateToProps = (state) => ({ state: state })

const mapDispatchToProps = (dispatch) => {
    const { onItemAdded } = bindActionCreators(actions, dispatch)
    return { onItemAdded: (maxId, label) => onItemAdded(maxId, label) }
}


const ItemAddForm = ({ state, onItemAdded }) => {
    const { todoData } = state
    let label = ''

    const maxId = todoData.reduce((maxId = 0, item) => {
        return (maxId > item.id) ? maxId : item.id
    })
    const onLabelChange = (e) => {
        label = e.target.value
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onItemAdded(maxId, label)

    }
    return (
        <form
            className="item-add-form"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                className="form-control"
                onChange={(e) => onLabelChange(e)}
                placeholder="add task"
            />
            <button className="btn btn-outline-secondary add">
                Add
                </button>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm)
