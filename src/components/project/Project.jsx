import React from 'react'
import './project.css'

const Project = (props) => {
    const {title, image, gitHub, deploy} = props.project
  return (
    <div className='project'>
        <img className='project-photo' src={image} alt='forecast photo'/>
        <h1>{title}</h1>
        <div className='buttons'>
            <button className='button'onClick={() => window.open(deploy,'_blank')}>View Demo</button>
            <button className='button' onClick={() => window.open(gitHub,'_blank')}>View GitHub</button>
        </div>
    </div>
    
  )
}

export default Project