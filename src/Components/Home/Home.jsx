import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import NavBar from '../NavBar/NavBar'
import Steps from '../Steps/Steps'
import Logos from '../logos/Logos'
import Experience from '../Experience/Experience'
import Footer from '../Footer/Footer'
import Testmonial from '../Testmonials/Testmonial'

import DownloadApp from '../DownloadApp/DownloadApp'

export default function Home() {
  return (
    <div className="landing_page ">
      <NavBar/>
  <Hero/>
  <Popular/>
  <Steps/>
  <Logos/>
  <Experience/>
  <Testmonial/>
  <DownloadApp/>

  <Footer/>
    </div>
  )
}
