import React from 'react'

const Card = ({project}) => {
    console.log({project})
  return (
    <div>
        <p>image</p>
        <h5>{project?.preview_heading}</h5>
        <p>{project?.preview_description}</p>
        <button>Open Modal</button>
    </div>
  )
}

export default Card