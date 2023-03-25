import React from 'react'
import landPage from '../images/landpage.png'
import tri from '../images/tri.png'
import thread from '../images/thread.png'
import tri2 from '../images/tri2.png'
import donut from '../images/donut.png'
import { CiAlarmOn } from 'react-icons/ci'
import { FaLaptopCode } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const Clia = <CiAlarmOn />
  const Code = <FaLaptopCode className='icon' />
  return (
    <div className='home__container'>
      <h2 className='heading'>FVM Based</h2>
      <h1 className='heading__sec first'>Decentralized Data Marketplace</h1>
      <p className='para'>
        Our data marketplace lets you sell your any kind of data securely and
        privately, with control over who can buy it and at what price. Powered
        by blockchain technology, you can earn from your data while keeping it
        safe from unauthorized access.
      </p>
      <Link to='/marketplace'>
        <a className='getStarted'>
          Get Started With Us
          <HiArrowNarrowRight className='arrowicon' />
        </a>
      </Link>
      <img src={tri} className='tri'></img>
      <img src={tri2} className='tri2'></img>
      <img src={thread} className='thread'></img>
      <img src={donut} className='donut'></img>

      <img src={landPage} className='landpage'></img>
      <p>&copy; created by team BroCode during EthScaling </p>
    </div>
  )
}

export default Home
