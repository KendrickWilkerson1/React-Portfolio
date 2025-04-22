import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const footer = () => {
  return (
    <div className='links'>
        <FaGithubSquare  size={75} onClick={() => window.open('https://github.com/KendrickWilkerson1','_blank')}/>
        <FaLinkedin  size={75} onClick={() => window.open('https://www.linkedin.com/in/kendrick-wilkerson-725601166/','_blank')}/>
    </div>
  )
}

export default footer