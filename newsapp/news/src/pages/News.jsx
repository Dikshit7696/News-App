import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
function News() {
const {user} =useContext(UserContext)
    const[newsData,setNewsData] =useState([])

    useEffect(()=>{
  
        axios.get("http://127.0.0.1:8000/news/find").then((response)=>{
            setNewsData(response.data)
        }).catch((err)=>console.log(err));

      
    },[])

   console.log(newsData);

    return (
        <div>
            <Navbar/>
            <div className="font-sans p-20">
                <h1 className="text-center text-2xl mb-20">All News</h1>
                <div className="flex flex-wrap justify-center">
                    {newsData.map((newsItem) => (
                        <Link to={user?'/news/'+newsItem._id:'/news'} onClick={()=>{!user&&alert("login first")}} key={newsItem.title} className="m-10 w-72">
                            <div className="border border-gray-300 rounded-lg p-4 shadow-md">
                                <img src={newsItem.thumbnail} alt={newsItem.title} className="w-full h-48 object-cover rounded-lg" />
                                <h2 className="text-lg mt-4">{newsItem.title}</h2>
                              
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
