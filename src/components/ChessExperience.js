import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './PersonalInfo.css'

const ChessExperience = ({formData,setFormData}) => {
  const [playerData, setPlayerData] = useState([])
  
    useEffect(() => {
    
   Axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
      .then(res => {
        
        setPlayerData(res.data)
        console.log(playerData)

      })
    }, [])
  return (
    <div className="chess-experience-container">
      
      <select placeholder='Level of Knowledge' name="knowledge" id="knowledge" value={formData.experience_level} 
        onChange = {(e) => setFormData({...formData, experience_level: e.target.value })} 
         required> 
        <option value="" >Level of Knowledge</option>
        <option value="beginner">beginner</option>
        <option value="normal">normal</option>
        <option value="professional">professional</option>
       </select>
       
      
      <select placeholder='Choose your Character' name="character" id="character" value={formData.character_id} 
        onChange = {(e) => setFormData({...formData, character_id: parseInt(e.target.value) })} required> 
        <option value="" >Choose your character</option>
        {playerData.map((person) => {
          return <option value={parseInt(person.id)}>{person.name} </option>})
        }
        </select>
        
       <label htmlFor="radio">Have you participated in the Redberry Championship?</label>
        <div className="yes-no" id="radio" required>
          <input type="radio"name= "radio" value={formData.already_participated} 
          onChange = {(e) => setFormData({...formData, already_participated: true })}  autoFocus/>
          <label>Yes</label>
          <input type="radio"name= "radio" value={!formData.already_participated} 
          onChange = {(e) => setFormData({...formData, already_participated: false })} />
          <label>No</label>
        </div>
    </div>
  )
}

export default ChessExperience