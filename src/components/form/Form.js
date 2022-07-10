import React, { useState, useEffect } from 'react'
import PersonalInfo from '../PersonalInfo';
import ChessExperience from '../ChessExperience'
import Axios from 'axios';
import './form.css'
import Grats from '../Grats/Grats.js';

export const Form = () => {
  const url = "https://chess-tournament-api.devtest.ge/api/register"
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('anti-refresh-datas')) || {
    email: "",
    phone: "",
    name: '',
    date_of_birth: "",
    experience_level: "",
    already_participated: true,
    character_id: ''
  })
  const [subbed,setSubbed] = useState(false)

 
 

  const submit = (e) => {
    e.preventDefault()

    if (step === 0) {

      setStep((currstep) => currstep + 1)
    }

    if (step === 1) {
      e.preventDefault();
      Axios.post(url, {
        email: formData.email,
        phone: formData.phone,
        name: formData.name,
        date_of_birth: formData.date_of_birth,
        experience_level: formData.experience_level,
        already_participated: formData.already_participated,
        character_id: formData.character_id
      })
        .then(res => {
          if(res.request.statusText ==='Created'){
            setSubbed(true)
          }
        })
    }
  }
 

  useEffect(() => {
    localStorage.setItem('anti-refresh-datas', JSON.stringify(formData))
  }, [formData])
  if(subbed === true) {
    localStorage.removeItem('anti-refresh-datas')
  }
  const FormTitles = ['Personal information', 'Chess experience']
  return (
    <>
    {subbed === false ? <div className='form-container'>
      <div className="left--container">
        <img className='first--rec' src="/photos/Rectangle.png" alt="rec" />
        <div className="left--cont--title">
          <img src='/photos/Vector.png' alt='king' />
          <h3> Redberry Knight Cup</h3>
        </div>
        <img className='chess--img'  src={step === 0 ? "/photos/unsplash.png" : "/photos/unspl.png"} alt="landing" />
        <div className="quote-container">
          <p>{step === 0 ? `“When you see a good move, look for a better one.”` 
          : `“Many have become chess masters; 
          no one has become the master of chess.”`}</p>
          <h3 style={step === 0 ? {color: "#E5E6E8"} 
          : {color: "#093F68", textAlign: "end"} }
          >{step === 0 ?'-Emanuel Lasker' : "- Siegbert Tarrasch "}</h3>
        </div>
      </div>
      <div className="right--container">
        <div className="form">
          <div className='first-paragraph'>
            <p>{step === 0? 'Start creating your account' :'First step is done, continue to finish onboarding'}</p>
          </div>
          <div className="progressbar">
            <div className="pr-bar-container">
              <p style={step === 0 || 1 ? {backgroundColor: '#E9FAF1'} : {backgroundColor: '#white'} }>{step === 0 ? step + 1 : <img src='photos/tick.png'/>}</p>
              <h6>Personal information</h6>
            </div>
            <img className='span' src="/photos/Line 3.png" alt="" />
            <div className="pr-bar-container">
            <p style={step === 1 ? {backgroundColor: '#E9FAF1'} : {backgroundColor: '#E5E6E8'} }>{step === 0 ? 2 : step + 1}  </p>
            <h6>Chess experience</h6>
            </div>
          </div>
          <div className="small-form-container">
            <div className="header">
              <h1>{FormTitles[step]}</h1>
              <h6>This is basic informaton fields</h6>

            </div>

            <form onSubmit={submit}>
              <div className="body">{step === 0 ? <PersonalInfo formData={formData} setFormData={setFormData} />
                : <ChessExperience formData={formData} setFormData={setFormData} />}</div>
                <div className="buttons">
                    <button className='button decrement' onClick={() => { setStep((currstep) => currstep - 1) }}
                    disabled={step < 1}> Back
                    </button>
                    <button className='button increment'>
                      {step === 1 ? 'Done' : 'Next'}
                    </button>
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </div> : 
    <>
      <Grats />
    </>}
    </>
  )
}