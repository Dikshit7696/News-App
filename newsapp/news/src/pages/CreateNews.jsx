import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function CreateNews() {
  const [thumbnail, setThumbnail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
//   const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNews = {
      thumbnail,
      title,
      description,
    };

    try {
      await axios.post('http://127.0.0.1:8000/news/create', newNews);
      console.log('News Created:', newNews);
      // Navigate to the news list page or homepage after successful creation
    //   history.push('/news');
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return (
   <div>
    <Navbar/>
     <div className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Create News</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Thumbnail URL</label>
          <input
            type="text"
            value={thumbnail}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create News
        </button>
      </form>
    </div>
   </div>
  );
}

export default CreateNews;
