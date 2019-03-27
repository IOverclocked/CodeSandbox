import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ listLength }) => (
    <>
        <h2>{listLength}</h2>
    </>
)

Counter.propTypes = {
    //variables
    listLength: PropTypes.number.isRequired
}

export default Counter;