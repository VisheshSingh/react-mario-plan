import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li>
                    <NavLink to="/">New project</NavLink>
                </li>
                <li>
                    <NavLink to="/">Sign out</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SignedInLinks
