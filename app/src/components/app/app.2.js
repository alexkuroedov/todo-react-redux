import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { inc, dec, rnd, addItem } from '../../actions'
import * as actions from '../../actions'

const App = ({ counter, inc, dec, rnd, add }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={dec}
                id="dec" className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                id="inc" className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={rnd}
                id="rnd" className="btn btn-primary btn-lg">RND</button>
            <button
                onClick={add}
                id="add" className="btn btn-primary btn-lg">ADD</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}



//another variant
const mapDispatchToProps =  (dispatch) => {

    const { inc, dec, rnd, addItem } = bindActionCreators(actions, dispatch)

    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10)
            rnd(randomValue)
        },
        add: () => {
            const number = 6
            addItem(number)
        }   
    }
}

//can pass the Object to the second parameter, if without problems
export default connect(mapStateToProps, mapDispatchToProps)(App)

// //connect - return component that wraps up Counter, for Redux Store available in
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)