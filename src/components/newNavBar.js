import React, { Component } from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

export default class NewNavBar extends Component {
  state = {
    toggleOn: false,
  }

  render() {
    const isOn = this.state.toggleOn
    return (
      <div>
        <nav
          className={
            isOn ? `${navbarStyles.navBarActive}` : `${navbarStyles.navBar}`
          }
        >
          <div
            className={
              isOn
                ? `${navbarStyles.menuToggleActive}`
                : `${navbarStyles.menuToggle}`
            }
            onClick={() => this.setState({ toggleOn: !isOn })}
          >
            <span />
            <span />
            <span />
          </div>
          <ul className={navbarStyles.navList}>
            <li className={navbarStyles.navItem}>
              <Link
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className={navbarStyles.navItem}>
              <Link
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className={navbarStyles.navItem}>
              <Link
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.activeNavItem}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className={navbarStyles.navItem}>
              <Link
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className={navbarStyles.navItem}>
              <Link
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
