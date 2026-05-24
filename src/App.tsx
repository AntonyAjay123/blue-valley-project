import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Header } from './components/Header/Header'
import { CustomNavbar } from './components/navbar/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import { Routes,Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home'
import { FooterHeader } from './components/Footer/FooterHeader'
import {ContactUs } from './pages/Contact'
import { About } from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <FooterHeader/>
    </div>
      </>
  )
}

export default App
