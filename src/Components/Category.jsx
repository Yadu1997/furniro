import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import dining from '../assets/Dining.png'
import living from '../assets/Living.png'
import bedroom from '../assets/Bedroom.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Category() {
    useEffect(()=>{
        Aos.init({duration:3000})
      },[])
    return (
        <>
            <div className='my-5 text-center'>
                <h1 className='fw-bolder'>Browse The Range</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <div className="row">
                    <div className="col-lg-4 my-5 d1" data-aos="flip-left">
                        <Card style={{ width: '380px',height:'480px' }}>
                            <Card.Img variant="top" src={dining} />
                            <Card.Body>
                                <Card.Title>Dining</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 my-5 d2" data-aos="flip-up">
                    <Card style={{ width: '380px',height:'480px'}}>
                            <Card.Img variant="top" src={living} />
                            <Card.Body>
                                <Card.Title>Living</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 my-5 d3" data-aos="flip-right">
                    <Card style={{ width: '380px',height:'480px'}}>
                            <Card.Img variant="top" src={bedroom} />
                            <Card.Body>
                                <Card.Title>Bedroom</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
