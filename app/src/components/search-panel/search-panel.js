import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'


const mapStateToProps = (state) => {
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    const { onSearchChange } = bindActionCreators(actions, dispatch)
    return { onSearchChange: (e) => onSearchChange(e) }
}

const SearchPanel = ({ state, onSearchChange }) => {

    return <input
        type="text"
        className="form-control search-input"
        placeholder="search"
        value={state.term}
        onChange={(e) => onSearchChange(e)}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)