import React, { useState } from 'react'


const PersonalInfo = ( {formData,setFormData}) => {
  
  // const [userInfo, setUserInfo] = useState()
  // const onSubmit = (data) => {
  //     setUserInfo(data)
  //     console.log(data)
  // }
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div className="personal-container">
        <input type="text"  name='name' placeholder='Name' value={formData.name} 
        onChange = {(e) => setFormData({...formData, name: e.target.value })} />
        <input type="email"  name='email' placeholder='Email address' value={formData.email} 
        onChange = {(e) => setFormData({...formData, email: e.target.value })} />
        <input type="tel"  name='number' placeholder='Phone number ' value={formData.number} 
        onChange = {(e) => setFormData({...formData, number: e.target.value })}/>
        <input type="date"  name='date' placeholder='Phone Date of birth' value={formData.date} 
        onChange = {(e) => setFormData({...formData, date_of_birth: e.target.value })} />

    </div>
  )
}

export default PersonalInfo