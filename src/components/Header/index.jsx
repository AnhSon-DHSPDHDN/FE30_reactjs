import { Link, useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Handle something
    navigate('/login-layout')
  }

  return <div className='header-container'>
    <ul>
      <li><Link to={'/'}>HomePage</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    </ul>
    <button onClick={handleLogout}>LOGOUT</button>
  </div>
}

export default Header
