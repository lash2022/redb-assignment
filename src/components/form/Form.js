import React, { useState, useEffect } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import PersonalInfo from '../PersonalInfo';
import ChessExperience from '../ChessExperience'
import Axios from 'axios';
import './form.css'

export const Form = () => {
  const url = "https://chess-tournament-api.devtest.ge/api/register"
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
  
      

    
  
  

  useEffect(() => {
    console.log(step)
  }, [step])

  const submit = (e) => {
    if (step === 0) {
      e.preventDefault()
      setStep((currstep) => currstep + 1)
    }

    if (step === 1) {
      e.preventDefault();

      console.log("form submitted")
      console.log(formData)
      Axios.post(url,{
        email: formData.email,
        number: formData.number,
        username: formData.username,
        date_of_birth: formData.date_of_birth,
        experience_level: formData.experience_level,
        already_participated: formData.already_participated,
        character_id: valueOf(formData.character_id)
      })
      .then(res => {
        console.log(res.data)
      })
    }

   
  }
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

            <form onSubmit={submit}>
              <div className="body">{step == 0 ? <PersonalInfo formData={formData} setFormData={setFormData} />
                : <ChessExperience formData={formData} setFormData={setFormData} />}</div>
              <button onClick={() => { setStep((currstep) => currstep - 1) }}
                disabled={step < 1}>
                Back
              </button>
              <button >
                {step === 1 ? 'Done' : 'Next'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}