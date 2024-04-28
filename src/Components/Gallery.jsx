import React, { useEffect } from 'react'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'
import g6 from '../assets/g6.png'
import g7 from '../assets/g7.png'
import g8 from '../assets/g8.png'
import g9 from '../assets/g9.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Gallery() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='container my-5'>
      <h3 className='text-center'>Share your setup with</h3>
      <h1 className='text-center fw-bolder'>#FuniroFurniture</h1>
      <div className="row my-5">
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <img style={{ margin: '10px' }} src={g1} alt="" />
            </div>
              <div className='col-lg-6' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <img src={g2} alt="" />
              </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <img src={g3} alt="" />
                </div>
                <div className="col-lg-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  <img style={{ margin: '10px' }} src={g4} alt="" />
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        <img style={{ margin: '100px' }} src={g5} alt="" />
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <img src={g6} alt="" />
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <img style={{ margin: '50px' }} src={g7} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <img src={g8} alt="" />
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <img src={g9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
