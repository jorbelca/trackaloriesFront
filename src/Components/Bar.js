import logo from '../assets/calories-icon-4.jpg'
import { Link } from 'react-router-dom'
import { useStore } from '../state/store'

const Bar = () => {
  const { user } = useStore()

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
              {user.username
                ?
                <div className='isLogged mr-6'>
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



    </>
  )
}

export default Bar