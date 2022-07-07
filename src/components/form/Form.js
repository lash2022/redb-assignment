import React, { useState } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import PersonalInfo from '../PersonalInfo';
import ChessExperience from '../ChessExperience'
import './form.css'

export const Form = () => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    username: '',
    date_of_birth: "",
    experience_level: "",
    already_participated: true,
    character_id: ''
  })
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
                <div className="body">{step == 0 ? <PersonalInfo formData={formData} setFormData ={setFormData}/>
                :<ChessExperience formData={formData} setFormData ={setFormData}/>}</div>
                <div className="footer">
                  <button onClick={() => {setStep((currstep) => currstep - 1)}}
                  disabled= {step < 1}>
                   Back
                  </button>
                  <button onClick={() => {
                    if(step == FormTitles.length -1){
                      console.log(formData)
                    }else{
                      setStep((currstep) => currstep + 1) 
                    }
                    }}
                 >
                    {step == FormTitles.length -1?'Done':'Next'} <FiArrowRightCircle />
                  </button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
