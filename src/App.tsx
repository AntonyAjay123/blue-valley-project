import './App.scss'
import { Header } from './components/Header/Header'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
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
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';
function App() {
  const curProject = useSelector((state:RootState)=>state.page.curProject)
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
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      </Routes>
      <FooterHeader/>
    </div>
      </>
  )
}

export default App
