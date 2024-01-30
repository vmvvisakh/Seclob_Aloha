import React from 'react'
import './Footer.css'
import Aloha from '../../assets/AlohaFooter.jpg'

function Footer() {
  return (
    <div className='Footer_main  '>
    <div className='container px-5 '>
        <div className="row">
          <div className="col-lg-12">
          <img className='mt-3 img-fluid' src={Aloha} alt="" />
          </div>
        
        </div>
        
    </div>
    </div>
  )
}

export default Footer