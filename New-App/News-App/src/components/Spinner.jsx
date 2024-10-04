import React from 'react'
import loading from './loading.gif.png'
const Spinner = () => {
  return (
    <div className='text-center  '>
      <img className='my-3 sm' src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
