import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Header } from './components/Header/Header'
import { CustomNavbar } from './components/navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import { Routes,Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
      <Header/>
      <Routes>
      </Routes>
    </div>
      </>
  )
}

export default App
