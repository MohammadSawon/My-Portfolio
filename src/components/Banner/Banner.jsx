import React from 'react'
import './banner.css'
export const Banner = () => {
  return (
    <div className='banner'>
      <div className='introduction'>
        <h3>Frontend Developer</h3>
        <h1>Hello, my name is Mohammed Sawon</h1>
        <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
        <button className='btnProjects'>Projects</button>
        <button className='btnLinkedin'>Linkedin</button>
      </div>
      <div>
        <img src="/src/assets/yellow-bg.png" alt="" />
      </div>
    </div>
  )
}
