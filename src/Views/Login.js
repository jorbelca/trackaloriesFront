import React, { useState } from 'react'
import Bar from '../Components/Bar'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(password)

  }
  return (
    <>
      <Bar />

      <div className="container is-max-desktop m-6">
        <form onSubmit={handleSubmit}>
          <div className="columns is-mobile">
            <div className="column is-three-fifths is-offset-one-fifth">
              <div className="title is-3 has-text-centered"><h1>Login</h1></div>


              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                    autoComplete="on"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>

                </p>
              </div>

              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                    autoComplete="on"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Login
                  </button>
                </p>
              </div>

            </div>
          </div>


        </form>
      </div>
    </>
  )
}

export default Login