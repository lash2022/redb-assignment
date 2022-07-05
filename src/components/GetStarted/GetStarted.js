import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <div className='container'>
        <div className="left-container">
          
            <img className='first-rec' src="/photos/Rectangle.png" alt="rec" />
            <div className="left-cont-title">
              <img src='/photos/Vector.png' alt='king' />
              <h3> Redberry Knight Cup</h3>
            </div>
            <img className='chess-img' src="/photos/Landing page- scrolling photo.png" alt="landing" />
        </div>
        <div className="right-container">
            <span>A LOT ABOUT</span>
            <div className="content">
              <h1 >CHESS SAYS  WHO WE ARE</h1>
              <div className="button-container">
                <p>Get Started</p>
                <img src="/photos/Vector2.png" alt="icon" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted