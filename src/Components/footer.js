import React from 'react'
import { ContextConsumer } from '../Context/ThemeContext'

function Footer() {
  return (
      <>
          <ContextConsumer>
              {context => (
                  <div className={`${context.theme} footer`}>
                      <h1>Proudly made with love by Sammy Mureithi</h1>
                      <h3>sammymureithi20@gmail.com</h3>
                      <button onClick={context.ChangeTheme}>Change Theme {`${context.theme==="dark"?"Dark":"Light"}`}</button>
                  </div>
              )}
          </ContextConsumer>
      </>
  )
}

export default Footer