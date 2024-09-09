import React, { useState } from 'react'

const Header = () => {
  const [name, setName] = useState('')
  

  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  

  return (
    <div className='header-container'>
      <h2>{name ? `${name}'s Expense Tracker` : 'Expense Tracker'}</h2>   
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      
    </div>
  )
}

export default Header
