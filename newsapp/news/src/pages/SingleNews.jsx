import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SingleNews = () => {
  
    let {id} = useParams()
    console.log(id);
   const[newsdata,setNewsData]=useState({})
   

    useEffect(()=>{
        let headers ={
            'id':id
        }
        axios.get("http://127.0.0.1:8000/news/findOne",{headers:headers}).then((response)=>{
            setNewsData(response.data)
        }).catch((err)=>console.log(err));

      
    },[])


    console.log(newsdata)


  return (
   <div>
    <Navbar/>
    <div className='m-10' >
      <img className=' w-[400px] ' src={newsdata.thumbnail} alt="" />
      <p className='font-bold text-xl' >{newsdata.title}</p>
      <p>
        {newsdata.description}
      </p>
    </div>
   </div>
  )
}

export default SingleNews
