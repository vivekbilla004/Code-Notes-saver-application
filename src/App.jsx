
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import Homepage from './components/homePage'
import Viewpaste from './components/viewPaste'
import { Toaster } from 'react-hot-toast';




const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
     <Navbar/>
     <Homepage/>
    </div>
  },
  {
    path: "/pastes",
    element: 
    <div>
     <Navbar/>
     <Paste/>
    </div>
  },
  {
     path: "/pastes/:id" ,
     element:  
     <div>
      <Navbar/>
      <Viewpaste/>
      
      
     </div>
  },

])
function App() {

  return (
<div>
  <RouterProvider router={router}/>
  <Toaster />
</div>
  )
}

export default App
