import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom' 
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import CSS from '.'

function App() {
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    fetch('https://stream-line-server.onrender.com')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <Login />
      <Signup />
      <Home />
    </>
  )
}

export default App;
