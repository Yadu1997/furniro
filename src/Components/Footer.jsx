import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-3">
            <h3 className='fw-bolder mb-5'>Funiro.</h3>
            <span>
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
            </span>
        </div>
        <div className="col-lg-3">
            <h3 className='fw-bolder mb-5 ms-4'>Links</h3>
            <ul style={{listStyle:'none',lineHeight:'3rem', fontWeight:'600'}}>
                <li><a style={{textDecoration:'none',color:'black'}} href="">Home</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="">Shop</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="">About</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="">Contact</a></li>
            </ul>
        </div>
        <div className="col-lg-3">
        <h3 className='fw-bolder mb-5 ms-4'>Help</h3>
            <ul style={{listStyle:'none',lineHeight:'3rem',fontWeight:'600'}}>
                <li><a style={{textDecoration:'none',color:'black'}} href="">Payment Options</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="">Returns</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="">Privacy Policies</a></li>
            </ul>
        </div>
        <div className="col-lg-3">
        <h3 className='fw-bolder mb-5 ms-4'>Newsletter</h3>
        <input className='form-control' type="email" placeholder='Enter Your Email Address Here' />
        <button className='btn btn-success mt-3'>Subscribe</button>
        </div>
      </div>
      <hr />
      <h5 className='text-center'>2024 furino. All rights reverved</h5>
    </div>
  )
}

export default Footer
