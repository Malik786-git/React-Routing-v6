import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
    </div>
  )
}

export default Navbar
