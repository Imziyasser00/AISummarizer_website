import React from 'react'
import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-col'>
        <img src={logo} alt="logo" className='w-12 object-contain'/>
      </nav>
      <button
        type='button'
        onClick={()=>window.open('https://github.com/')}
      >
        GitHub
      </button>
    </header>
  )
}

export default Hero
Hero