import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'


const PrivateRoute = ({children}) => {
    const {userId} = useContext(UserContext)

  return (
    <div>{userId? children : <Navigate to="/" />}</div>
  )
}

export default PrivateRoute