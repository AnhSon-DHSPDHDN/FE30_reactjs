import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login-layout')
  }

  return <div className='header-container'>
    <ul className='header-container__nav'>
      <li className='header-container__nav-item'><Link to={'/'}>HomePage</Link></li>
      <li className='header-container__nav-item'><Link to={'/about'}>About</Link></li>
    </ul>
    <button className='header-container__btn' onClick={handleLogout}>LOGOUT</button>
  </div>
}

export default Header
