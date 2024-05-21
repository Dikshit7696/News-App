import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate =useNavigate();
    const {user,setUser,setUserdata} =useContext(UserContext)

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
    .post("http://127.0.0.1:8000/user/login", form)
    .then((Response) =>{
      localStorage.setItem("usertoken",Response.data.token)
        setUser(true);
        setUserdata(Response.data)
       navigate('/news')
    })
    .catch((err) => alert(err.response.data));
};
    





  return (
   <div>
    <Navbar/>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    <Link className='text-blue-600' to={'/register'}>Rgister</Link>
    </div>
   </div>
  );
};

export default Login;
