import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Product1 from '../assets/Product 1.png'
import Product2 from '../assets/Product 2.png'
import Product3 from '../assets/Product 3.png'
import Product4 from '../assets/Product 4.png'
import Product5 from '../assets/Product 5.png'
import Product6 from '../assets/Product 6.png'
import Product7 from '../assets/Product 7.png'
import Product8 from '../assets/Product 8.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Products() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <h1 className='text-center fw-bolder my-5'>OUR PRODUCTS</h1>
      <div className='container my-5 border rounded p-5'>
        <div className="row">
            <div className="col-lg-3"  data-aos="fade-right">
            <Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={Product1} />
      <Card.Body>
        <Card.Title >Syltherine</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img width={'258px'} height={'301px'} variant="top" src={Product2} />
      <Card.Body>
        <Card.Title>Leviosa</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-3" data-aos="zoom-in">
            <Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={Product3} />
      <Card.Body>
        <Card.Title>Lolito</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={Product4} />
      <Card.Body>
        <Card.Title>Respira</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-3" data-aos="zoom-in">
            <Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={Product5} />
      <Card.Body>
        <Card.Title>Grifo</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Product6} />
      <Card.Body>
        <Card.Title>Muggo</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-3" data-aos="fade-left">
            <Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={Product7} />
      <Card.Body>
        <Card.Title>Pingky</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Product8} />
      <Card.Body>
        <Card.Title>Potty</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            
        </div>
        <div className='text-center mt-5'>
      <button className='btn btn-primary'>Show More</button>
      </div>
      </div>
    </>
  )
}

export default Products
