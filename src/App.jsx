// import "../node_modules/bulma/css/bulma.min.css"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Landing from "./Views/Landing"
import Register from "./Views/Register"
import Login from "./Views/Login"
import Personal from "./Views/Personal"
import Diary from "./Views/Diary"
import Weight from "./Views/Weight"
import { useEffect } from "react"
import { notificationStore, userStore } from "./state/store"
import { getPersonalInfo } from "./Services/personalService"
import SearchPage from "./Views/SearchPage"
import Terms from "./Views/Terms"

function App() {
  const setUser = userStore((state) => state.setUser)
  const setNotification = notificationStore((state) => state.setNotifications)

  useEffect(() => {
    const token = window.localStorage.getItem("loggedUser")
    const welcome = async (token) => {
      const response = await getPersonalInfo(token)

      if (response.status === 200) {
        setNotification({ message: "Welcome!" })

        setUser(response.data)
      }
      if (response.status !== 200) {
        return console.error(response.message)
      }
    }
    if (token !== null ){ welcome(token)}


  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/terms-conditions" element={<Terms />} />
      </Routes>
    </div>
  )
}

export default App
