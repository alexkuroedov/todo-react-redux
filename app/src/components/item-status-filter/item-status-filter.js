import React, { Component } from 'react'
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
    buttons = [
        {name:'all', label:'All'},
        {name:'active', label:'Active'},
        {name:'done', label:'Done'},
    ]
    render() {
        const {filter, onFilterChange} = this.props
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name
            const cl = isActive ? 'btn-info' : ' teal lighten-3'
            return (
                <button 
                    type="button"
                    key={name} 
                    className={`btn ${cl}`}
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
}