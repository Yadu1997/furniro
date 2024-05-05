import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
    <div className="navigation d-md-flex justify-content-center my-5">
    <img src={logo} alt="logo" />
    <h1 className='fw-bolder'>Furniro</h1>
    </div>
    <div className='homeContents d-lg-flex justify-content-center align-items-center'>
          <div style={{width:'500px', backgroundColor:'bisque',marginRight:'100px'}} className='hh ms-auto p-5 border rounded' data-aos="fade-left">
            <h5>New Arrival</h5>
            <h1 style={{fontSize:'70px'}}>Discover Our </h1>
            <h1 style={{fontSize:'70px'}}>New Collection</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut repellat dicta culpa reiciendis, unde recusandae numquam totam. Voluptatem eum odit eveniet iure nulla consequatur a dolorem. Sequi, repellendus ratione!</p>
            <button className='btn btn-outline-success p-2'>BUY NOW</button>
          </div>
         
    </div>
    
    </>
  )
}

export default Home
