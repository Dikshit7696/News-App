import React, {  useState,createContext } from 'react'

export const UserContext = React.createContext();

  function UserContextProvider({children}){

    const[user,setUser]=useState(false);
    const[userdata,setUserdata]=useState({});

    return <UserContext.Provider value={{user,setUser,userdata,setUserdata}}>
        {children}
    </UserContext.Provider>
 }


 export default UserContextProvider;