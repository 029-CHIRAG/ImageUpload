import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Components/Layout.jsx'
import Gallery from './Pages/Gallery.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/SignUp.jsx'
import MyImages from './Pages/MyImages.jsx'
import Upload from './Pages/Upload.jsx'
import Home from './Pages/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      {/* <Route path='' element={<Home/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/myImages' element={<MyImages/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='upload' element={<Upload/>}/>
      </Route>

  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
