import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

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
      <label htmlFor="knowledge">Level of Knowledge</label>
      <select placeholder='experience_level' name="knowledge" id="knowledge" value={formData.experience_level} 
        onChange = {(e) => setFormData({...formData, experience_level: e.target.value })} > 
        <option value="level">--level of knowledge--</option>
        <option value="beginner">beginner</option>
        <option value="normal">normal</option>
        <option value="professional">professional</option>
       </select>
      <label htmlFor="character">Choose your Character</label>
      <select placeholder='Choose your Character' name="character" id="character" value={formData.character_id} 
        onChange = {(e) => setFormData({...formData, character_id: parseInt(e.target.value) })} > 
        <option value="character">Choose your character</option>
        {playerData.map((person) => {
          return <option value={parseInt(person.id)}>{person.name}</option>})
        }
        
        
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