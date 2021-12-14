import '../App.css'
import {useEffect, useState} from 'react'

const ProjectDetail = ({project: {contributors, title, technologies, link}}) => {
    let tech = technologies.map((languages) => languages)
       
   return (
       <div className='individual-project'>
           <h1 style={{fontSize: 30}}>{title}</h1>
           {contributors === '1' ? <p>This was a solo project</p> : <p>This was a group project with {contributors} contributors, myself and {contributors - 1} other(s).</p>}
           <p>Technolgies include: {tech}</p>
           <a href={link} target='_blank'>{link ? `${title}` : "Coming soon"} </a>
       </div>
   )
}
export default ProjectDetail