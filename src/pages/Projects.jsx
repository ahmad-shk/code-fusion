import React from 'react'
import ProjectsBox from '../components/ProjectsBox';

export default function Projects() {
  const primaryColor = '#eb9736';
  const secondaryColor = '#F2F4F1';
  const ternaryColor = '#f25b4c';
  const tetraColor = '#2b2a2f';
  return (
    <div className={`bg-[${secondaryColor}] py-4`}>
      <h2 className={`text-[36px] font-bold text-center py-12 text-[${tetraColor}]`}>Projects Completed</h2>
        <div className={`w-[85%] mx-auto grid grid-cols-3 gap-6 projects`}>
             <ProjectsBox />
             <ProjectsBox />
             <ProjectsBox />

             <ProjectsBox />
             <ProjectsBox />
             <ProjectsBox />

             <ProjectsBox />
             <ProjectsBox />
             <ProjectsBox />
        </div>
    </div>
  )
}
