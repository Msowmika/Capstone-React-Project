import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import Movie from './MovieSelection'
import Browse from './Browse'
import ErrorPage from './Error'


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movie" element={<Movie/>}/>
      <Route path="/Info" element={<Info/>}/>
      <Route path='/Browse' element={<Browse/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  
)
