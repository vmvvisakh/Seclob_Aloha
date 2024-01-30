import React, { useState } from 'react'
import './Banner.css'
import banner from '../../assets/banner.jpg'
import { Button, Container, Image, Nav,Navbar } from 'react-bootstrap'
import Aloha from '../../assets/Aloha.jpg'

function Banner() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
     <div className='position-absolute w-100'>
      <div className='Banner_Bar'>
     <Navbar expand="lg" className="bg-body-tertiary Banner_BarNav" >
      <Container fluid>
      <Navbar.Brand href="#home" className='ms-2' >
       { isNavbarOpen ? <Image className='banner_AlohaIcon' src={Aloha} alt="Logo" width="60" height="30"  /> : "" }
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-4 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='Nav_Text ms-3'>Home</Nav.Link>
            <Nav.Link  className='Nav_Text ms-3'>Surfing</Nav.Link>
            <Nav.Link  className='Nav_Text ms-3'>Hula</Nav.Link>
            <Nav.Link  className='Nav_Text ms-3'>Vulcano</Nav.Link>
          </Nav>
            <Button variant="success" className='px-3 me-1 book_btn'>Book a trip</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className='pt-4'>
    <p className='Banner_Text'>Welcome <br /> to Hawaii</p>
    </div>
     </div>
      <div>
        <img src={banner} className='img-fluid w-100 BannerImg' alt="" />
      </div>
    </div>
  )
}

export default Banner