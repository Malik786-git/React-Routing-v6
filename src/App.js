import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

const App = () => {
  
  let appRoutes = useRoutes(routes);

  return (
    <div>
     {appRoutes}
    </div>
  )
}

export default App
