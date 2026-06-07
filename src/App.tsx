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
import { Projects } from './pages/Projects'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
import { ProjectHeader } from './components/ProjectHeader/ProjectHeader'
import { NorthTown } from './pages/NorthTown'
import { Madhuban } from './pages/Madhuban'
import { ToastMessage } from './components/Toast/ToastMessage'
import { ScrollToTop } from './components/ScrollToTop'
function App() {
  const [count, setCount] = useState(0)
  const curProject = useSelector((state:RootState)=>state.page.curProject)
  const toast = useSelector((state:RootState)=>state.toast)
  return (
    <>
    <div className='app-container'>
      {curProject===''?<Header/>:<ProjectHeader/>}
       <ToastMessage />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/northtown' element={<NorthTown/>}/>
        <Route path='/projects/madhuban' element={<Madhuban/>}/>
      </Routes>
      <FooterHeader/>
    </div>
      </>
  )
}

export default App
