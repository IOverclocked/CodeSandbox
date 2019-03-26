import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ listLength }) => (
    <>
        <h2>{listLength}</h2>
    </>
)

Counter.propTypes = {
    listLength: PropTypes.number.isRequired
}

export default Counter;