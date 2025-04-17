import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const MyApp = () => {
    return (
        <div>
            <h1>I am another jsx !</h1>
        </div>
    )
}
const reactElement = {
    type: "a",
    props: {
       href : "https://www.google.com",
       target: "_blank"
    },
    children: "Click me to visit google"
}
const AnotherElement = () => {
    return (
        <div>
        <a href="https://www.google.com" target='_blank'>visit google</a>
        </div>
    )
}
const teacger = " Hitesh Choudhary"

const reactEle = React.createElement(
    "a", {href: "https://www.google.com"}, "click me to visit google",teacger
)

createRoot(document.getElementById('root')).render(

    // App()
    // <App />
    // <MyApp />
    // MyApp()
    // <AnotherElement />
    reactEle
  
)
