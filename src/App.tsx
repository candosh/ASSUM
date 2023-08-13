// import { useState } from 'react'
import './App.css'
import SideNav from './components/SideNav'
import Home from './pages/Home'
import New from './pages/New'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import All from './pages/All'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Landing from './pages/Landing'

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/new" element={<New />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/all" element={<All />} />
          <Route path="/home/detail" element={<Detail />} />
          <Route path="/home/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
