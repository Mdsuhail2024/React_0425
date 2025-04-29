import React from 'react'
import { About,  ContactUs,  Github,  Home, User,  } from './components/index'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom'
import Layout from './Layout'
import { githubInfoLoder } from './components/Github'

// const router = createBrowserRouter([
// {
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <ContactUs />
//     },
//     {
//       path: "githunb",
//       element: <Github />
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="github" loader={githubInfoLoder} element={<Github />} />
      <Route path='user/:userId' element={<User/>} />
    </Route>
  )
)


const App = () => {
  return (
    <>
    
    <RouterProvider  router={router}/>
    </>
  )
}

export default App