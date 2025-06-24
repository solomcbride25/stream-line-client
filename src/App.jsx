import { useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  useEffect(() => {
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
