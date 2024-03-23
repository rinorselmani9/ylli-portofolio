import React from 'react'
import { main_content } from './content'

const Main = () => {
  return (
    <div id='main'style={{height:'400px'}}>
      <p>{main_content.first_heading}</p>
      <h1>{main_content.description_head}</h1>
      <h2>{main_content.description}</h2>
      <a href='#contact'>{main_content.button_text}</a>
    </div>
  )
}

export default Main