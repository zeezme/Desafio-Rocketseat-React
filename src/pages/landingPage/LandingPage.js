import React from 'react'
import './landingPage.css'
import Countdown from '../../components/countdown/Countdown'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Rocket from '../../components/rocket/Rocket'


export default function landingPage() {
  return (
    <>
      <Header />
      <div className='landingPage-container'>
        <Countdown />
        <Rocket />
      </div>
      <Footer />
    </>
  )
}
