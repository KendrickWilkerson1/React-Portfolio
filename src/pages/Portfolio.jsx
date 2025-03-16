import React from 'react'
import Project from '../components/project/Project'
import '../styles/portfolio.css'

const Portfolio = () => {
  const projects = [{
    title: 'Weather Dashboard',
    image: '/images/weather-app.jpg',
    gitHub: 'https://github.com/KendrickWilkerson1/Weather-Dashboard',
    deploy: 'https://weather-dashboard-t3w8.onrender.com'
  },

  { 
    title: 'Calculator',
    image:  '/images/weather-app.jpg',
    gitHub: 'https://github.com/KendrickWilkerson1/Weather-Dashboard',
    deploy: 'https://weather-dashboard-t3w8.onrender.com'
}]



  return (
    <div className='portfolio'>
      {projects.map((project)=> <Project project={project}/>)}
    </div>
  )
}

export default Portfolio