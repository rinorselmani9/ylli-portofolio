import React from 'react'
import { projects } from './content'
import Card from './Card'

const Projects = () => {
  return (
    <div id='projects' style={{height:'400px'}}>
      {projects?.map((project,index) =><Card key={index} project={project}/>)}
    </div>
  )
}

export default Projects