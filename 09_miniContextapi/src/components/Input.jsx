import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
// import { userContext } from '../Context/UserContext'

const Profile = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})

    }
  return (
    <div>
        <input 
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text" placeholder='userName' />
        {" "}
        <input 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text" placeholder='password' />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Profile