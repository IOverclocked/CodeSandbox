import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>

            <Link style={linkStyle} to="/">home</Link> |
            <Link style={linkStyle} to="/">about</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
