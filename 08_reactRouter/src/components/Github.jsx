import React, { useCallback, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     // fetch("https://www.github.com/users/hiteshchoudhary")
    //     fetch("https://api.github.com/users/Mdsuhail2024")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // }, [])

    const data = useLoaderData()
    return (
    <>
        <h1 className='text-4xl font-bold text-center bg-red-300 rounded-md m-12 p-12'>My Follwers: {data.followers}</h1>
        <img className='mx-auto my-4 rounded-sm'
        src={data.avatar_url} alt="" />
    </>
  )
}

export default Github

export const githubInfoLoder = async () => {
     const response = await fetch("https://api.github.com/users/hiteshchoudhary")
     return response.json()
}