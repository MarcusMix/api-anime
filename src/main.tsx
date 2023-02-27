import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages
import AnimeDetail from './pages/AnimeDetails/AnimeDetails.page'

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
