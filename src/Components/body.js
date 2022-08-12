import { ContextConsumer } from '../Context/ThemeContext'

function Body() {
    return (
        <ContextConsumer>
            {context => {
                return <div className={`${context.theme} body`}>
                    <h1>To be done</h1>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div> 
            }}
        </ContextConsumer>
        
  )
}

export default Body