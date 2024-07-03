import React from 'react'
import Image from './Image'

const Header = () => {
  return (
    <div className='header_container'>
        <div className='logo'>
            <Image src={'url'} alt={'logo'} className='logo-icon' />
        </div>
        <div className='nav_bar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
