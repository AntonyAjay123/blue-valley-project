import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ScrollToTop } from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ScrollToTop/>
  <Provider store={store}>
  <App/>
  </Provider>
    </BrowserRouter>
)
