import './App.css'
import Profile from './components/Profile'
import Input from "./components/Input"

import UserContextProvider from './Context/UserContext'

function App() {


  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Input />
      <Profile />
    </UserContextProvider>
  )
}

export default App
