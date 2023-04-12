import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routers from './routers'

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </div>
  )
}

export default App
