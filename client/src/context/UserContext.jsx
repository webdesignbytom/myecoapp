import React from 'react'
import { useState } from 'react';
import { userSampleData } from '../utils/UserData'

export const UserContext = React.createContext()

const initUserState = userSampleData

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState)  

    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider> 
      );
}

export default UserContextProvider