// import { useState } from 'react'
import './App.css';
import SideNav from './components/Wokspace/SideNav';
import Home from './pages/Workspace/Home';
import New from './pages/Workspace/New';
import Detail from './pages/Workspace/Detail';
import Favorites from './pages/Workspace/Favorites';
import All from './pages/Workspace/All';
import Loading from './pages/Workspace/Loading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
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
          <Route path="/home/loading" element={<Loading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
