import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-dark text-light p-3'>
      <h4 className='text-center'>All right reserved © Midh@.com</h4>
      <p className='text-center mt-3 '>
        <Link className='y' to='/about'>About</Link>
        <Link className='y' to='/contact'>Contact</Link>
        <Link className='y' to='/policy'>Privacy And Policy</Link>
      </p>
      </div>
  )
}

export default Footer