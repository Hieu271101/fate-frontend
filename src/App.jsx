import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div style={{display:"flex", flexDirection:"column", flex: 1, height: '100vh'}}>
           
           <Header ></Header>
          
           <div style={{display:"flex", flexDirection:"row", flex: 1}}>
               <SideBar ></SideBar>
              <MainContent></MainContent>
           </div>
           
           <Footer></Footer>
       </div>
    </>
  )
}

export default App
