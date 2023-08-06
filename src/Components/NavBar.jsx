import React, {useContext} from 'react'
import { BytContext } from '../Context/BytContext';
import {Link} from 'react-router-dom';

const NavBar = () => {
  const {userName} = useContext(BytContext)

  return (
    <nav>
    <ul>
      <li><Link to="http://localhost:3000/" className='trending'><span>~</span> Trending Byts <span>~</span></Link></li>
      <li><Link to="home" className='titleScreen'><span>~</span> Bytter: Byt and Be Heard! <span>~</span></Link></li>
      <li><Link to="/all-a-byt-me" className='myByts'><span>~</span>{userName}'s' Byts <span>~</span></Link></li>
      <li><Link to="http://localhost:3000/" className='login'><span>~</span> Login <span>~</span></Link></li>
    </ul>
  </nav>
  )
}

export default NavBar