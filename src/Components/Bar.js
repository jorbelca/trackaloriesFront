import logo from '../assets/calories-icon-4.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../state/store'
import Notification from './Notification'

const Bar = () => {
  const { user, errors, removeUser } = useStore()
  const navigate = useNavigate()

  return (
    <>
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">

              <img src={logo} alt={'logo'} width={32} height={32} />
              <h1 className='title'>TrackAlories</h1>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">

              <Link to="/home" className="icon-text m-7">
                <span className="icon">
                  <i className="fa-solid fa-search"></i>
                </span>
              </Link>
              <button className="icon-text m-7 " onClick={() => {
                window.localStorage.removeItem("loggedUser")
                removeUser()
                navigate("/")
              }}>
                <span className="icon has-text-danger-dark ">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
              </button>
              {user.token
                ?
                <div className='isLogged mr-6'>

                  <Link to="/diary" className="icon-text ml-6">
                    <span className="icon">
                      <i className="fa-solid fa-book"></i>
                    </span>
                  </Link>
                  <Link to='/personal' className="icon-text">
                    <span className="icon">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <span>{user.username}</span>
                  </Link>
                </div>
                :
                <div className="buttons">
                  <Link className="button is-primary" to="/register"><strong>Register</strong></Link>

                  <Link className="button is-light" to="/login"><strong>Log in</strong></Link>
                </div>
              }

            </div>
          </div>
        </div>
      </nav >

      {errors === undefined || errors.length === 0
        ? <></>
        : <Notification />}

    </>
  )
}

export default Bar