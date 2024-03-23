import React from 'react'

const Card = ({process}) => {
  return (
    <div>
        <p>{process.icon}</p>
        <p>{process.card_heading}</p>
        <p>{process.card_description}</p>
    </div>
  )
}

export default Card