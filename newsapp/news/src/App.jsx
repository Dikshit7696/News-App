import React, { useContext, useEffect } from 'react'
import HomePage from './pages/Homepage'
import News from './pages/News'
import { Route, Routes } from 'react-router-dom'
import CreateNews from './pages/CreateNews'
import SingleNews from './pages/SingleNews'
import Register from './pages/Register'
import Login from './pages/Login'
import { UserContext } from './UserContext'
import AdminDashboard from './pages/AdminDashboard'
import Updatenews from './pages/Upadtenews'

const App = () => {

  const {user,setUser,userdata} =useContext(UserContext)

  useEffect(()=>{

    let token = localStorage.getItem("usertoken");
       if(token){
          setUser(true);
       }
  },[])




  
  return (
    <div>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/news/:id' element={<SingleNews/>}/>
    <Route path='/admin' element={userdata.role==="admin"?<AdminDashboard/>:<HomePage/>}/>
    <Route path='/admin/news/update/:id' element={<Updatenews/>}/>

   
    
    <Route path='/news/create' element={<CreateNews/>}/>
   </Routes>
    </div>
  )
}

export default App
