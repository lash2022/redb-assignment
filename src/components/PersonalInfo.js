import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="personal-container">
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Email address'/>
      <input type="tel" placeholder='Phone number '/>
      <input type="date" placeholder='Phone Date of birth'/>
    </div>
  )
}

export default PersonalInfo