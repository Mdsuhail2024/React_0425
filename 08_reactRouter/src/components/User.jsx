import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {userId} = useParams()
  return (
    <div>
        <h1 className='text-4xl font-bold text-center bg-red-300 rounded-md m-12 p-12'>User: {userId}</h1>
    </div>
  )
}

export default User