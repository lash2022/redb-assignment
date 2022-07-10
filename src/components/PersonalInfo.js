import React, { useState } from 'react'
import "./inputStyles.css"


const PersonalInfo = ( {formData,setFormData}) => {
  
 const [focus, setFocus] = useState(false)
 const handleFocus = (e) => {
    setFocus(true)
 }
 const [focuse, setFocuse] = useState(false)
 const handleFocuse = (e) => {
    setFocuse(true)
 }
 const [focused, setFocused] = useState(false)
 const handleFocused = (e) => {
    setFocused(true)
 }
 const [focuss, setFocuss] = useState(false)
 const handleFocuss = (e) => {
    setFocuss(true)
 }
  return (
    <div className="personal-container">
      <div className="inputs" >
        <input type="text"  name='name' placeholder='Name' value={formData.name} 
        onChange = {(e) => setFormData({...formData, name: e.target.value })} minLength="2" 
        required onBlur={handleFocus} focus = {focus.toString()} />
        <div className="error">Please lengthen this text to 2 characters or more.</div>
      </div>
      <div className="inputs">
        <input type="email"  name='email' placeholder='Email address'  pattern=".+@redberry\.ge" value={formData.email} 
        onChange = {(e) => setFormData({...formData, email: e.target.value })} 
        onBlur={handleFocuse} focuse= {focuse.toString()} required/>
        <div className="error">Your email should end with "redberry.ge" </div>
        </div>
      <div className="inputs">
        <input type="tel"  name='phone' placeholder='Phone number ' value={formData.phone} 
        onChange = {(e) => setFormData({...formData, phone: e.target.value })} pattern='^[0-9]*$' minLength="9" maxLength = "9" 
        onBlur={handleFocused} focused = {focused.toString()} required/>
        <div className="error">Phone input should contain 9 characters(only digits).</div>
      </div> 
      <div className="inputs"> 
        <input type="date"  name='date' placeholder='Phone Date of birth' value={formData.date_of_birth} 
        onChange = {(e) => setFormData({...formData, date_of_birth: e.target.value })} 
        onBlur={handleFocuss} focuss = {focuss.toString()}  required/>
        <div className="error">Please enter your date of birth.</div>
      </div>  
    </div>
  )
}

export default PersonalInfo