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
    let _label = ''
    let _input = ''
    const { todoData } = state
    const _maxId = todoData.reduce((maxId = 0, item) => {
        return (maxId > item.id) ? maxId : item.id
    })

    const onLabelChange = (e) => {
        _label = e.target.value
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        onItemAdded(_maxId, _label)
        _input.value=''
    }
    return (
        <form
            className="item-add-form"
            onSubmit={onSubmit}
        >
            <input
                ref={(input) => _input = input }
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
