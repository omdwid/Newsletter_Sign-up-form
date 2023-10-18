import React from 'react'
import '../thankyou.css'
import { Link, useNavigate } from 'react-router-dom'

const ThankYou = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='image'></div>
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <strong>abc@gmail.com</strong>. Please open it and click the button inside to confirm your subscription</p>
      <button onClick={handleClick}>Dismiss message</button>
    </div>
  )
}

export default ThankYou
