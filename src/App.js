import 'bulma/css/bulma.min.css';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from './Views/Landing';
import Register from './Views/Register'
import Login from './Views/Login'
import Home from './Views/Home';
import Personal from './Views/Personal';

function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/personal' element={<Personal />} />
    </Routes>
  </div>
}

export default App;
