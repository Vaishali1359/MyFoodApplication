import React from 'react'
import About1 from './Components/About/About1'
import About2 from './Components/About/About2'
import Video from "./Components/About/Video"
import Customer from './Components/Card/Customer'
import Navbar from './Navbar'
// import Home3 from './Components/Home3/Home3'
const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
        <About1 /> 
        {/* <Home3 />       */}

        <Video />

        <About2/>

        <Customer />
         
    </div>
  )
}

export default About