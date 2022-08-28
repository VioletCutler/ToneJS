import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Welcome to Synth World</h1>
            <Link to="/">Home</Link>
            <Link to='/synth'>Synth</Link>
        </div>
    )
}

export default Header