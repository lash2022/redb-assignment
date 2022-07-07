import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const PersonalInfo = ( {formData,setFormData}) => {
  const {register, handleSubmit, errors} = useForm()
  // const [userInfo, setUserInfo] = useState()
  // const onSubmit = (data) => {
  //     setUserInfo(data)
  //     console.log(data)
  // }
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div className="personal-container">
      <form >
        <input type="text"  name='username' placeholder='Name' value={formData.username} 
        onChange = {(e) => setFormData({...formData, username: e.target.value })} />
        <input type="email"  name='email' placeholder='Email address' value={formData.email} 
        onChange = {(e) => setFormData({...formData, email: e.target.value })} />
        <input type="tel"  name='number' placeholder='Phone number ' value={formData.number} 
        onChange = {(e) => setFormData({...formData, number: e.target.value })}/>
        <input type="date"  name='date' placeholder='Phone Date of birth' value={formData.date} 
        onChange = {(e) => setFormData({...formData, date_of_birth: e.target.value })} />
       
      </form>
    </div>
  )
}

export default PersonalInfo