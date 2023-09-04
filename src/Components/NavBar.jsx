import React, {useContext} from 'react'
import { UserContext } from '../Context/UserContext';
import {Link} from 'react-router-dom';

const NavBar = () => {
  const {userName, setUserName, userId} = useContext(UserContext)

  const handleLogOut = () => {
    localStorage.clear()
    setUserName(null)
  }

  return (
    <nav>
      <ul>
        {!userId && <li><Link to="/" className='login'><span>~</span> Login <span>~</span></Link></li>}
        <li><Link to="/signup" className='signup'><span>~</span> Signup <span>~</span></Link></li>
        {userId && <li><Link to="/all-a-byt-me" className='myByts'><span>~</span>{userName}'s' Byts <span>~</span></Link></li>}
        {userId && <li><Link to="/home" className='titleScreen'><span>~</span> Bytter: Byt and Be Heard! <span>~</span></Link></li>}
        {userId && <li><Link to="/trending" className='trending'><span>~</span> Trending Byts <span>~</span></Link></li>}
        {userId && <li><Link to="/" className='logOut' onClick={handleLogOut}><span>~</span> Log Out <span>~</span></Link></li>}
      </ul>
    </nav>
  )
}

export default NavBar