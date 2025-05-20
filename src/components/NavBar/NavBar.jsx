import { useState } from 'react'
import './NavBar.sass'

const NavBar = () => {

    const [activeIcon, setActiveIcon] = useState('home')

    const icons = [
        { text: 'home' },
        { text: 'search' },
        { text: 'collections_bookmark' },
        { text: 'person' },
      ];


    return (
        <div className='nav-bar'>
            <ul className='nav-bar-list'>
                {icons.map((icon) => (
                    <li className={`nav-bar-item material-symbols-outlined ${activeIcon === icon.text ? 'activeIcon' : ''}`} onClick={() => setActiveIcon(icon.text)}>{icon.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar