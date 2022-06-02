import React, { useState } from "react"
import Bar from "../Components/Bar"
import { useStore } from "../state/store"
import { setPersonalInfo } from "../Services/personalService"
import eliminateUser from "../Services/eliminateUser"
import { useNavigate } from "react-router-dom"

const Personal = () => {
  const { user, setErrors, setMessages, removeUser } = useStore()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [activity, setActivity] = useState(0)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = window.localStorage.getItem("loggedUser")

    const response = await setPersonalInfo(token)

    if (response.status !== 200) {
      setErrors(response.message)
      return setErrors(response.response.data.error)
    }
    if (response.status === 200) {
      return setMessages(response.statusText)
    }
  }

  const handleEliminate = async (event) => {
    event.preventDefault()

    if (
      window.confirm(
        "You're going to eliminate all the information of your profile. This action is irrevocable. Want to continue?"
      )
    ) {
      const token = window.localStorage.getItem("loggedUser")

      const response = await eliminateUser(token)

      if (response.status !== 200) {
        return setErrors(response.response.data.error)
      }
      if (response.status === 200) {
        window.localStorage.removeItem("loggedUser")
        removeUser()
        navigate("/")
        return setMessages(response.statusText)
      }
    }
  }

  return (
    <>
      <Bar />
      {/* PERSONAL INFO FOR UPDATE */}
      <fieldset disabled>
        <div className="container is-three-quarters m-5">
          <form onSubmit={handleSubmit}>
            <div className="title is-6 center">Personal</div>

            <div className="field is-grouped">
              <div className="control is-expanded">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input "
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={user.username}
                    autoComplete="off"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div className="control is-expanded">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input "
                    type="email"
                    placeholder={user.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control is-expanded ">
                <label className="label">Password</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
            </div>

            <label className="label">
              Level of Activity (Current:{user.activity})
            </label>
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select
                  name="levelActivity"
                  onChange={(e) => setActivity(e.target.value)}
                >
                  <option defaultValue="" disabled>
                    Select
                  </option>
                  <option value={1}>I make exercise 1 day of the week</option>
                  <option value={2}>I make exercise 2 days of the week</option>
                  <option value={3}>I make exercise 3 days of the week</option>
                  <option value={4}>I make exercise 4 days of the week</option>
                  <option value={5}>I make exercise 5 days of the week</option>
                  <option value={6}>
                    I make exercise 6 or more days of the week
                  </option>
                </select>
              </div>
            </div>

            <div className="field is-grouped mt-4">
              <div className="control">
                <button className="button is-link is-responsive" type="submit">
                  Update Profile Info
                </button>
              </div>
            </div>
          </form>
        </div>
      </fieldset>

      {/* ELIMINATE BUTTON */}

      <div className="ml-6 mr-6 ">
        <div className="is-align-self-flex-end ">
          <button
            className="button is-fullwidth is-responsive is-danger "
            onClick={handleEliminate}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span> Delete Profile</span>
            <span className="icon is-large ">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Personal
