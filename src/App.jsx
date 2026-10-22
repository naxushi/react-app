import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import { PostsProvider } from './context/PostContext'
import { UserProvider } from './context/UserContext'
//import './App.css'
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Profile from './pages/Profile'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Info from './pages/Info'

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <UserProvider>
          <PostsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Info" element={<Info />} />
            </Routes>
          </PostsProvider>
        </UserProvider>
      </main>
    </div>
  )
}

export default App
