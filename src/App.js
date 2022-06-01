import 'bulma/css/bulma.min.css';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from './Views/Landing';
import Register from './Views/Register'
import Login from './Views/Login'
import Home from './Views/Home';
import Personal from './Views/Personal';
import Diary from './Views/Diary';
import { useStore } from './state/store';
import { useEffect } from 'react';

function App() {
  const { setUser } = useStore()
  useEffect(() => {
    const localToken = window.localStorage.getItem("loggedUser")
    if (localToken) setUser({ token: localToken })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/diary' element={<Diary />} />
      </Routes>
    </div>
  )
}

export default App;
