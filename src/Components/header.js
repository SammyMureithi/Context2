import React from 'react'
import { ContextConsumer } from '../Context/ThemeContext'

function Header() {
  return (
      <>
          <ContextConsumer>
              {context => (
                  <nav className={`${context.theme} header`}>
                      <ul>
                          <li>Home</li>
                          <li>About</li>
                          <li>Account</li>
                      </ul>
                  </nav>
              )}
          </ContextConsumer>
      </>
  )
}

export default Header