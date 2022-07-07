import React from 'react'

const ChessExperience = ({formData,setFormData}) => {
  return (
    <div className="chess-experience-container">
      <label htmlFor="knowledge">Level of Knowledge</label>
      <select placeholder='experience_level' name="knowledge" id="knowledge" value={formData.experience_level} 
        onChange = {(e) => setFormData({...formData, experience_level: e.target.value })} > 
        <option value="level">--level of knowledge--</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Profesional">Profesional</option>
       </select>
      <label htmlFor="character">Choose your Character</label>
      <select placeholder='Choose your Character' name="character" id="character" value={formData.character_id} 
        onChange = {(e) => setFormData({...formData, character_id: e.target.value })} > 
        <option value="character">Choose your character</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        
       </select>
       <label htmlFor="radio">Have you participated in the Redberry Championship?</label>
        <div className="yes-no" id="radio">
          <input type="radio"name= "radio" value={formData.already_participated} 
          onChange = {(e) => setFormData({...formData, already_participated: true })}  />
          <label>Yes</label>
          <input type="radio"name= "radio" value={!formData.already_participated} 
          onChange = {(e) => setFormData({...formData, already_participated: false })} />
          <label>No</label>
        </div>
    </div>
  )
}

export default ChessExperience