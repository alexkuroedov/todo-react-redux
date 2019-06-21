import React from 'react'
import './item-status-filter.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'




const mapStateToProps = (state) => {
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    const { onFilterChange } = bindActionCreators(actions, dispatch)

    return { onFilterChange: (id) => onFilterChange(id) }
}


const ItemStatusFilter = ({state, onFilterChange}) => {
    const buttonsData = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]
    const { filter } = state

    const buttons = buttonsData.map(({ name, label }) => {
        const isActive = filter === name
        const buttonClass = isActive ? 'btn-info' : ' teal lighten-3'
        return (
            <button
                type="button"
                key={name}
                className={`btn ${buttonClass}`}
                onClick={() => onFilterChange(name)}>

                {label}
            </button>
        )
    })
    return (
        <div className="btn-group right-align">
            {buttons}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter)
