import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

function Updatenews() {
    const[newsdata,setNewsData]=useState({})
  const [thumbnail, setThumbnail] = useState(newsdata.thumbnail);
  const [title, setTitle] = useState(newsdata.title);
  const [description, setDescription] = useState(newsdata.description);


  let {id} = useParams()
  console.log(id);
 
  let headers ={
    'id':id
}
 

  useEffect(()=>{
     
      axios.get("http://127.0.0.1:8000/news/findOne",{headers:headers}).then((response)=>{
          setNewsData(response.data)
      }).catch((err)=>console.log(err));

    
  },[])





  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNews = {
      thumbnail,
      title,
      description,
    };

    try {
      await axios.post('http://127.0.0.1:8000/news/update', newNews ,{headers:headers});
      alert('News updated');
     
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return (
   <div>
    <Navbar/>
     <div className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Update News</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Thumbnail URL</label>
          <input
            type="text"
            value={thumbnail || newsdata.thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter thumbnail URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title || newsdata.title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            value={description || newsdata.description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Update News
        </button>
      </form>
    </div>
   </div>
  );
}

export default Updatenews;