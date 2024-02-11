import React from 'react'
import './app.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
const App = () => {
  return (
    <main className='w-screen h-full m-0 p-0 '>
      <div className='w-full h-full m-0 p-0 flex justify-center items-center flex-col'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App
