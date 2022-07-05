import React, { useState } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import PersonalInfo from '../PersonalInfo';
import ChessExperience from '../ChessExperience'
import './form.css'

export const Form = () => {
  const [step, setStep] = useState(0)
  const FormTitles = ['Personal information', 'Chess experience']
  return (
    <div className='form-container'>
        <div className="left--container">
            <img className='first--rec' src="/photos/Rectangle.png" alt="rec" />
                <div className="left--cont--title">
                  <img src='/photos/Vector.png' alt='king' />
                  <h3> Redberry Knight Cup</h3>
                </div>
                <img className='chess--img' src="/photos/unsplash.png" alt="landing" />
            </div>
        <div className="right--container">
            <div className="form">
              <div className='first-paragraph'>
                <p>Start creating your account</p>
              </div>
              <div className="progressbar">
                <div></div>
              </div>
              <div className="small-form-container">
                <div className="header">
                  <h1>{FormTitles[step]}</h1>
                  <h6>This is basic informaton fields</h6>
                </div>
                <div className="body">{step == 0 ? <PersonalInfo/>:<ChessExperience/>}</div>
                <div className="footer">
                  <button onClick={() => {setStep((currstep) => currstep - 1)}}
                  disabled= {step < 1}>
                   Back
                  </button>
                  <button onClick={() => {setStep((currstep) => currstep + 1)}}
                  disabled = {step == FormTitles.length -1}>
                    Next <FiArrowRightCircle />
                  </button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
