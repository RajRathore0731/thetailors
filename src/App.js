import React, { useEffect, useState } from 'react'
import './App.css';
import {About, CustomDesign, Footer, HomeSection, Navigation,After, Services,TagLine} from './components'

export default function App() {
  return (
    <>
      <Navigation/> 
      <HomeSection/>
      <About/>
      <After/>
      <Services/>
      <TagLine/>
      <CustomDesign/>
      {/* <Footer/> */}
    </>
  )
}
