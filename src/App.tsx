// import { useState } from 'react'
import './App.css';
import Home from './pages/Workspace/Home';
import New from './pages/Workspace/New';
import Detail from './pages/Workspace/Detail';
import Favorites from './pages/Workspace/Favorites';
import All from './pages/Workspace/All';
import Loading from './pages/Workspace/Loading';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Landing from './pages/Landing'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/new" element={<New />} />
            <Route path="/home" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
