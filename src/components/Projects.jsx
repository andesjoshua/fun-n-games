import '../App.css'
import {projectData} from './projectData'
import {useEffect, useState} from 'react'
import ProjectDetail from './ProjectDetail'

const Projects = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        setProject(projectData.map((project) => {
           return project
         }))
    },[])
    
    
    
   return (
       <div className='projects'>
             Projects {project.map((item) => { return <ProjectDetail project={item}/>})}
       </div>
       
   )
}
export default Projects