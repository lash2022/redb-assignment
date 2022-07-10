import React from 'react'
import './Grats.css'

const Grats = () => {
  return (
    <div className='grats-container'>
        <div className="left---container">
            <img className='first---rec' src="/photos/Rectangle.png" alt="rec" />
            <div className="left--cont--title">
              <img src='/photos/Vector.png' alt='king' />
              <h3> Redberry Knight Cup</h3>
            </div>
            <img className='chess--img' src="/photos/unsp.png" alt="landing" />
        </div>
        <div className="right---container">
            <div className="grats-text-container">
              <img src="/photos/rocket.png" alt="rocket" />
              <h1>Onboarding completed!</h1>
            </div>
        </div>
    </div>
  )
}

export default Grats