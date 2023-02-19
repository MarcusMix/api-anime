import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'

//pages
import AnimeDetail from './pages/AnimeDetails.page'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}/>
      <Route path={'/anime/:id'} element={<AnimeDetail/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
