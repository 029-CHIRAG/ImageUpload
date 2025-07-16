import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import authContext from '../Context/AuthContext/Authcontext.js'


const ProtectedRoute = ({children}) => {
    const {user}=useContext(authContext);
  
  return user ? children : <Navigate to="/login" replace />;
    
  
}

export default ProtectedRoute