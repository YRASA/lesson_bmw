import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    // static proptypes
    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: { value } times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </p>
        )
    }
}

Counter.propsTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter;