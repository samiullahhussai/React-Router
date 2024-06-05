import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements,loader } from 'react-router-dom';
// import Footer from './components/Footer/Footer';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Github, { GitHubInfoLoader } from './Github';
import User from './components/user/User';
//yeh callBack me na dena tha router
import { useLoader } from 'react-router-dom';
const router = createBrowserRouter(
  [
    {
      path: "/", element: <Layout />,
      children: [
        {
          path: "", element: <Home />
        },
        {
          path: "about", element: <About />
        },
        { path: "contacts", element: <Contact /> },
        // GitHubInfoLoader se </> hata kr {} dia to no result then dono khatam kia to true
        {
          loader: GitHubInfoLoader,
          path: "github",
          element: <Github />
        },
        {
          path: "user/:id", element: <User />
        }
      ]
    },

  ]
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contacts' element={<Contact/>}/>
//       {/* <Route loader={<GitHubInfoLoader/>}
//         path='github'
//         element={<Github />} /> */}
//     //   <Route 
//       loader={GitHubInfoLoader}
//       path='github' 
//       element={<Github />} />

//       <Route path='user/:id' element={<User/>}/>
//     </Route>
//   )
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

