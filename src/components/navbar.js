import React from "React"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav>
      <ul className={navbarStyles.navList}>
        <li>
          <Link
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
