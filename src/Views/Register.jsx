import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Bar from "../Components/Bar"
import getCompleteDate from "../Services/completeDate"
import registerService from "../Services/registerService"
import { useStore } from "../state/store"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [sex, setSex] = useState()
  const [activity, setActivity] = useState()

  const { setErrors, setNotification } = useStore()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: username,
      email: email,
      password: password,
      birthdate: new Date(birthdate),
      height: Number(height),
      weight: [{ date: getCompleteDate(), weight: Number(weight) }],
      sex: sex,
      activity: Number(activity),
    }
    console.log(user)

    // Service for registration
    const response = registerService(user)

    // Handle errors
    if (response.status !== 200) {
      setErrors(response.message)
      return setErrors(response.response.data.error)
    }
    if (response.status === 200) {
      setNotification(response.statusText)
      navigate("/login")
    }
  }

  const handleCancel = () => {
    setUsername("")
    setEmail("")
    setPassword("")
    setBirthdate("")
    setActivity()
    setWeight(0)
    setHeight(0)
    setSex()
  }
  return (
    <>
      <Bar />
      <div className="container is-three-quarters m-5">
        <form>
          <div className="title is-3 center">
            <h3>Register</h3>
          </div>

          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input "
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your Username "
                  autoComplete="off"
                  required
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
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="control is-expanded ">
              <label className="label">Birth Date</label>
              <p className="control has-icons-left">
                <input
                  className="input is-responsive"
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  autoComplete="off"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-calendar"></i>
                </span>
              </p>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Sex</label>

              <div className="select">
                <select onChange={(e) => setSex(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>

            <div className="control is-expanded">
              <label className="label">Weight (kg)</label>
              <input
                className="input"
                type="number"
                placeholder=" kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              ></input>
            </div>

            <div className="control is-expanded">
              <label className="label">Height (cm)</label>
              <input
                className="input"
                type="number"
                placeholder=" cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>

          <label className="label">Level of Activity</label>

          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select
                className="levelActivity "
                onChange={(e) => setActivity(e.target.value)}
                required
              >
                <option value="">Select</option>
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

          <div className="field mt-4">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" required />
                <>&nbsp;</>I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-success is-responsive"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <div className="control" onClick={handleCancel}>
              <button className="button is-success is-light is-responsive">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
