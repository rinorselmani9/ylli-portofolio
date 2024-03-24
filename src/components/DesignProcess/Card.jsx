import React from 'react'

const Card = ({process}) => {
  return (
    <div>
        <img src={`/assets/images/proccesses/${process.icon}`}/>
        <p>{process.card_heading}</p>
        <p>{process.card_description}</p>
    </div>
  )
}

export default Card