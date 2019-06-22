import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
          <nav>
            <div className="nav-wrapper red darken-4">
            <Link to="announcements" className="brand-logo right">Announcement Wall</Link>
            <ul id="nav">
                <li><Link to="announcements">Announcements</Link></li>
                <li><Link to="add">New Announcement</Link></li>
                <li><Link to="login">Log in</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar