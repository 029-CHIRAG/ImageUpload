import { useState } from 'react'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import Upload from './Pages/Upload'
import Gallery from './Pages/Gallery'
import MyImages from './Pages/MyImages'
import ImageCard from './Components/ImageCard'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Upload/> */}
    {/* <Gallery/> */}
    {/* <MyImages/> */}
    <Navbar/>
    <ImageCard/>
    </>
  )
}

export default App
