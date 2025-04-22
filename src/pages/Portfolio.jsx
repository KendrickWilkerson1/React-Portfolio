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
    image:  '/images/calculator.jpg',
    gitHub: 'https://github.com/KendrickWilkerson1',
    deploy: 'https://weather-dashboard-t3w8.onrender.com', 
    comingSoon: true,
},

{
  title: 'Meal Tracker',
    image:  '/images/Meal.jpeg',
    gitHub: 'https://github.com/KendrickWilkerson1',
    deploy: 'https://weather-dashboard-t3w8.onrender.com', 
    comingSoon: true,

}, 

{
  title: 'Chess Game',
    image:  '/images/Chess.jpeg',
    gitHub: 'https://github.com/KendrickWilkerson1',
    deploy: 'https://weather-dashboard-t3w8.onrender.com', 
    comingSoon: true,

}]



  return (
    <div className='portfolio'>
      {projects.map((project)=> <Project data={project}/>)}
    </div>
  )
}

export default Portfolio