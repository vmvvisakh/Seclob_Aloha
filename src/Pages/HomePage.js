import React from 'react'
import Banner from '../Components/Home/Banner'
import Section from '../Components/Home/Section'
import Surfing from  '../assets/Surfing.jpg'
import Dula from  '../assets/Dula.jpg'
import Vulcano from  '../assets/Vulcano.jpg'
import Footer from '../Components/Home/Footer'

function HomePage() {
  return (
    <div>
    <Banner />
    <Section HighLightsData={HighLightsData} />
    <Footer />
    </div>
  )
}

export default HomePage


const HighLightsData = [
  {
    title:"Surfing",
    image: Surfing,
    description:"Best Hawaiian islands for surfing."
  },
  {
    title:"Hula",
    image: Dula,
    description:"Try it yourself."
  },
  {
    title:"Vulcanoes",
    image: Vulcano,
    description:"Volcanic conditions can change at any time."
  }

]