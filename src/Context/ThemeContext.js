import React, { useState } from 'react'

const {Provider,Consumer}=React.createContext()
function ThemeContextProvider( props ) {
    const [theme, setTheme] = useState( "dark" )
   function handleClick (){
        setTheme(theme==="dark"?"light":"dark")
    }
    return (
      <div>
          <Provider value={{ theme:theme,ChangeTheme:handleClick}}>
              {props.children}
          </Provider>
    </div>
  )
}

export  {ThemeContextProvider,Consumer as ContextConsumer}