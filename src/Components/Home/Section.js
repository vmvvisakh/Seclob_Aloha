import React from 'react'
import './Section.css'
import { Button, Card } from 'react-bootstrap'
import group1 from  '../../assets/Group 1.jpg'
import group1cat from  '../../assets/Group 1cardcategory.jpg'
import Ellipse from  '../../assets/Ellipse 10.jpg'
import Slider from 'react-slick'

function Section(props) {

        const {HighLightsData} = props

        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1414,
              settings: {
                slidesToShow: 0,
               
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
            
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
           
              }
            },
         
          ]
        }
        
  return (
    <div>
    <div className='section_main container px-5 pt-4'>
    <p className='Section_TextHeading'>Highlights</p>
    <div className="row">
    <Slider {...settings}>
     { HighLightsData.map((obj) => ( 
       
     <div className="col-md-4">
        <Card className='m-2'>
      <Card.Img variant='top'  src={obj.image}   />
      <Card.Body className='px-4 '>
        <Card.Title className='section_cardTitle mt-2'>{obj.title}</Card.Title>
        <Card.Text className='section_cardText mt-3'>
          {obj.description}
        </Card.Text>
      </Card.Body>
      <footer className='mb-4'>
        <img className='float-end me-4' src={group1} alt="" />
      </footer>
    </Card>
        </div>
        ) )} 
        </Slider>
    </div>
    </div>
    <div className='SectionMain_Category mt-5 pt-5'>
    <div className='container px-5'>
    <div className="row">
        <div className="col-md-6 mb-4">
        <p className='Section_TextHeading'>Categories</p>
            {categories.map((obj) =>(
                  <Card className='mb-2'>
                <Card.Body className='d-flex justify-content-between px-4'>
                <Card.Text className='Section_CategoryCardText'>
                    {obj.cat}
                 </Card.Text>
                 <Card.Img src={group1cat} style={{width: "16px",height: "16px"}} />   
                </Card.Body>
            </Card>
            ))}
 
        </div>
        <div className="col-md-6">
        <p className='Section_TextHeading'>Travel Guide</p>
        <Card className='px-4 pt-2 '>
            
        <Card.Body className='d-flex justify-content-between'>
            <div>
        <Card.Text className='section_CategorycardTitle mt-2'>
        Hadwin Malone
        </Card.Text>
         <Card.Text className='section_CategorycardTitleSub'>
         Guide since 2012
        </Card.Text> 
        <Button  className='Section_categoryButton text-success bg-transparent mt-4 mb-2 fw-bold'>Contact</Button>
        </div>
        <div>
        <Card.Img src={Ellipse}  className='rounded-circle Section_categoryCardImg img-fluid'  />  
        </div>
        </Card.Body>
        
        </Card>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Section


const categories = [
    {
    cat: "Adventure"
    },
    {
     cat: "Culinary"
     },
     {
      cat: "Eco-tourism"
     },
     {
      cat: "Family"
     },
     {
     cat: "Sport"
     },
]