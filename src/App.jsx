import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import SubSideBar from './components/SubSideBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div style={{display:"flex", flexDirection:"column", flex: 1, height: '100vh'}}>
           
           <Header ></Header>
          
           <div style={{display:"flex", flexDirection:"row", flex: 1, position: "relative"}}>
               <SideBar ></SideBar>
              <MainContent></MainContent>
              {/* <SubSideBar style={{position:"absolute", right:0}}></SubSideBar> */}
           </div>
           
         
       </div>
    </>
  )
}

export default App
