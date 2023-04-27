import React from 'react'
import '../styles/App.css'

const Button = ({onSave}) => {
  return (
    <button onClick={onSave}>Save</button>
  )
}

export default Button