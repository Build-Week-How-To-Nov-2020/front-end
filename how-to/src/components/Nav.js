import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav() {
    return (
        <nav>
            <div className="nav-links">
                <div><Link to="/howtos">All How Tos</Link></div>
                <div><Link to="/newhowto">New How To</Link></div>
                <div><Link to="/signin">Sign In</Link></div>
                <div><Link to="/signup">Sign Up</Link></div>
            </div>
        </nav>
    )
}
