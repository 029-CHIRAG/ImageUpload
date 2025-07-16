import React, { useState } from 'react'
import authContext from './Authcontext'

const AuthContextProvider = ({children}) => {
    const [login,setLogin]=useState(false);
    const [user,setUser]=useState(null);
  return (
    <authContext.Provider value={{login,setLogin,user,setUser}}>{children}</authContext.Provider>
  )
}

export default AuthContextProvider