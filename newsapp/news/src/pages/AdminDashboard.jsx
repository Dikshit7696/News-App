import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
 
    const[users,setUsers] = useState([])
    const[newsData,setNewsData] =useState([])
    const[refresh,setRefresh] =useState(false)
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/user/getAlluser")
      .then((Response) => setUsers(Response.data))
      .catch((err) => console.log(err));


      axios.get("http://127.0.0.1:8000/news/find").then((response)=>{
        setNewsData(response.data)
    }).catch((err)=>console.log(err));

  }, [refresh]);


  function deleteNews(id){
    let headers ={
        'id':id
    }
    axios.delete("http://127.0.0.1:8000/news/delete",{headers:headers}).then((response)=>{
      
       setRefresh(!refresh)
    }).catch((err)=>console.log(err));
  }



  function deleteUser(id){
    let headers ={
        'id':id
    }
    axios.delete("http://127.0.0.1:8000/user/delete",{headers:headers}).then((response)=>{
      
        setRefresh(!refresh)
        alert(response.data);
    }).catch((err)=>console.log(err));
  }




  return (
    <div>
      <Navbar />
      <div className=" flex gap-3 justify-around pt-4 h-[600px] px-4 bg-slate-100 w-screen   ">
        <p className="text-[34px] font-extrabold text-stone-500">
          Admin Dashboard
        </p>
        <div className=" w-[35%] bg-slate-100 border flex flex-col  px-3 py-2 h-full border-slate-400 rounded-md  ">
         
          <div className="flex flex-col gap-3">
           {
            users.map((user)=>{
                return <div className="bg-slate-300 border flex justify-between px-4 py-1  ">
                    <span className="font-bold">{user.username}</span>
                    <button onClick={()=>deleteUser(user._id)} className="bg-red-500 text-white rounded px-3 ">delete</button>
                </div>
            })
           }
          </div>
        </div>

        <div className=" w-[55%] h-full bg-slate-100 border p-4 border-slate-400 rounded-md  ">
        <div className="w-[100%]  rounded flex justify-end "><Link to={'/news/create'}><button className="bg-blue-700 text-l text-white px-4 py-2 mb-3 mr-2">+ Add news</button></Link></div>
        <div className="flex flex-col gap-3 w-[100%] h-[90%] overflow-x-hidden overflow-y-auto   ">
           {
            newsData.map((news)=>{
                return <div className="bg-slate-300 border flex justify-between px-4 py-1  ">
                   <div className="flex  gap-2">
                   <img className="w-[50px]" src={news.thumbnail} alt="" />
                    <span className="font-bold">{news.title}</span>
                   </div>
                   
                   <div className="flex flex-col gap-1">
                   <Link to={'/admin/news/update/'+news._id} className="bg-green-500 text-white rounded px-3 ">update</Link>
                    <button onClick={()=>deleteNews(news._id)} className="bg-red-500 text-white rounded px-3 ">delete</button>
                   </div>
                    
                </div>
            })
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
