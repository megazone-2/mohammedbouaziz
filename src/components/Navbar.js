import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Mohammed Bouaziz</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    )
}
export default Navbar;
