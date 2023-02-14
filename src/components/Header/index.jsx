import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { actLogout } from '../../redux/features/users/usersSlice'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(actLogout()) // Dispatch Act logout
    navigate('/login-layout')
  }

  return <div className='header-container'>
    <ul className='header-container__nav'>
      <li className='header-container__nav-item'><Link to={'/'}>HomePage</Link></li>
      <li className='header-container__nav-item'><Link to={'/about'}>About</Link></li>
    </ul>
    {/* Handle logout cho button logout */}
    <button className='header-container__btn' onClick={handleLogout}>LOGOUT</button>
  </div>
}

export default Header
