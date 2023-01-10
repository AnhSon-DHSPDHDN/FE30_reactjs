import React from 'react'
import './SideMenu.css'

const SideMenu = ({ isOpen, setIsOpen }) => {
  console.log('SideMenu Rendering  !!!!!')
  // Log để check xem component có bị render hay không

  if (!isOpen) return null
  return (
    <div className='side-menu'>
      <button className='side-menu__btn-hide'
        onClick={() => setIsOpen(false)}>
        Hide
      </button>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    </div>
  )
}

export default SideMenu
