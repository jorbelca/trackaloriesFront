import "bulma/css/bulma.min.css"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Landing from "./Views/Landing"
import Register from "./Views/Register"
import Login from "./Views/Login"
import Home from "./Views/Home"
import Personal from "./Views/Personal"
import Diary from "./Views/Diary"
import Weight from "./Views/Weight"
import { useEffect } from "react"
import personalService from "./Services/personalService"
import { useStore } from "./state/store"

function App() {
  const { setErrors, setUser, setMessages } = useStore()
  const token = window.localStorage.getItem("loggedUser")

  useEffect(() => {
    const welcome = async (token) => {
      const response = await personalService(token)

      if (response.status === 200) {
        setMessages(response.statusText)
        console.log(response.data)
        setUser(response.data)
      }
      if (response.status !== 200) {
        return setErrors(response.message+ ". Try to Log in")
      }
    }
    welcome(token)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/weight" element={<Weight />} />
      </Routes>
    </div>
  )
}

export default App
