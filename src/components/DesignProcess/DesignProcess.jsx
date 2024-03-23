import React from 'react'
import { design_process } from './content'
import Card from './Card'

const DesignProcess = () => {
  return (
    <div>
        <div>{design_process.title}</div>
        <div>
            {design_process?.processes.map((process) => <Card process={process}/>)}
        </div>
    </div>
  )
}

export default DesignProcess