import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
//import './App.css'
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Profile from './pages/Profile'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Info from './pages/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
