import React from 'react'
import Bar from '../Components/Bar'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
  return (
    <>
      <Bar />
      <div className="container is-three-quarters m-5">
        <form onSubmit={handleSubmit}>
          <div className="title is-3 center">
            <h1>Register</h1>
          </div>

          <div className="field">
            <label className="label">UserName</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input " type="text" placeholder="Enter your UserName " />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>

            </div>

          </div>

          <div className="field ">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Gender</label>

              <div className="select">
                <select>
                  <option default>Select</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
            </div>

            <div className="control is-expanded">
              <label className="label">Weight</label>
              <input className="input" type="number" placeholder=" kg"></input>
            </div>

            <div className="control is-expanded">
              <label className="label">Height</label>
              <input className="input" type="number" placeholder=" cm" />
            </div>
          </div>


          <label className="label">Level of Activity</label>

          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="levelActivity">
                <option default>Select</option>
                <option value="1">I make exercise 1 day of the week</option>
                <option value="2">I make exercise 2 days of the week</option>
                <option value="3">I make exercise 3 days of the week</option>
                <option value="4">I make exercise 4 days of the week</option>
                <option value="5">I make exercise 5 days of the week</option>
                <option value="6">I make exercise 6 or more days of the week</option>
              </select>
            </div>
          </div>

          <div className="field mt-4">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type='submit'>Register</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div >
    </>
  )
}

export default Register