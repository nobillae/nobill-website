import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routers from './routers'
import Home from './routers/home/home'

function App() {
  return (
    <div className="h-full">
      <BrowserRouter basename='nobill-website'>
        <Routers/>
      </BrowserRouter>
    </div>
  )
}

export default App
