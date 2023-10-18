import React from 'react'
import Info from './Info'
import SubscribeForm from './SubscribeForm'
import homeimage from '../assets/images/illustration-sign-up-desktop.svg'

const Home = () => {
  return (
    <div className="hero">
        <div className='left'>
          <Info/>
          <SubscribeForm/>
        </div>
        {/* <div className='homeimage' /> */}
        <img src={homeimage} alt="" />
    </div>
  )
}

export default Home
