import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { UserContext } from '../UserContext';



function Navbar() {

  const {user,setUser,userdata} =useContext(UserContext)
   


  function makeLogout(){
    setUser(false);
    localStorage.removeItem("usertoken")
  }
  
  return (
    <nav className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-400">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 mr-2" />
        <span className="text-xl font-bold">News App</span>
      </div>
      <div>
        <Link to="/" className="mr-4 text-gray-700 hover:text-gray-900">Homepage</Link>
        <Link to="/news" className="mr-4 text-gray-700 hover:text-gray-900">NewsPage</Link>
        {
          userdata.role==="admin"&&<Link to="/admin" className="mr-4 text-gray-700 hover:text-gray-900">AdminDashboard</Link>
        }
        {
          !user?
          <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
         : <button onClick={makeLogout}  className="text-gray-700 hover:text-gray-900">Logout</button>
        }
      </div>
    </nav>
  );
}

export default Navbar;
