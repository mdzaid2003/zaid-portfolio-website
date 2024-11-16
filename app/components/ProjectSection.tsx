'use client'
import React, { useState } from 'react'
import { NewProjectCard } from './NewProjectCard';
import { cn } from '../utils/cn';

const projectsData = [
    {
      id: 1,
      title: "BUSINESS MODEL",
      description: "Project 1 description",
      image: "/images/projects/Business_Model.png",
      tag: ["Green Globe Travels"],
      gitUrl: "https://www.canva.com/design/DAGEAWCa-Zo/oo5nVbEVs2mYQ3HwrvY0tQ/view?utm_content=DAGEAWCa-Zo&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
      previewUrl: "https://www.canva.com/design/DAGEAWCa-Zo/oo5nVbEVs2mYQ3HwrvY0tQ/view?utm_content=DAGEAWCa-Zo&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
    },
    {
      id: 2,
      title: "TRAVEL THE WORLD,LEAVE ONLY FOOTPRINTS",
      description: "Project 2 description",
      image: "/images/projects/Research.png",
      tag: ["travel experiences", "Benefit local communities", "sustainable tourism", "audience"],
      gitUrl: "https://www.canva.com/design/DAGD_hW22Ts/eIo2IzmkUz4mDR1tfBLAlg/view?utm_content=DAGD_hW22Ts&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
      previewUrl: "https://www.canva.com/design/DAGD_hW22Ts/eIo2IzmkUz4mDR1tfBLAlg/view?utm_content=DAGD_hW22Ts&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
    },
    {
      id: 3,
      title: "SOCIAL EMOTIONAL LEARNING",
      description: "Project 3 description",
      image: "/images/projects/s&e.png",
      tag: ["AI IN BANKING", "AI-POWERED CUSTOMER SERVICE","Fruad Detection"],
      gitUrl: "https://www.canva.com/design/DAGAxLInfYg/z5QN7t4UPtxphX87n6l-ZQ/view?utm_content=DAGAxLInfYg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      previewUrl: "https://www.canva.com/design/DAGAxLInfYg/z5QN7t4UPtxphX87n6l-ZQ/view?utm_content=DAGAxLInfYg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
    
    // {
    //   id: 5,
    //   title: "React Firebase Template",
    //   description: "Authentication and CRUD operations",
    //   image: "/images/projects/5.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: "/images/projects/6.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
];

export default function ProjectSection() {
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-5">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}  
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}  
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}  
          />
        </div> */}
        <div className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
      )}>
            {/* {filteredProjects.map((project) => <ProjectCard key={project.id} id={project.id} title={project.title} imgUrl={project.image} description={project.description} />)} */}
            {projectsData.map((project) => <NewProjectCard key={project.id} project={project}/>)}
        </div>
    </section>
  )
}
