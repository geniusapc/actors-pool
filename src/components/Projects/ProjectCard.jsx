import React from 'react'
import Moment from 'react-moment'

function ProjectCard({ project }) {
    return (
        <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7  cursor-pointer'>
            <div className='flex space-x-4 mb-8'>
                <div className="w-8 h-8">
                    <img className="w-6 h-6" src={"icons/clapperboard-play.svg"} alt="" />
                </div>
                <div className='font-semibold flex flex-col'>
                    {project.title}
                    <span className='text-gray text-sm'>  <Moment>{project.createdAt}</Moment></span>
                </div>
            </div>
            <div className='flex space-x-4'>
                <div>
                    <img className="w-8 h-8" src={project.talents[0].photo} alt="" />
                </div>
                <div className='flex space-x-4 items-center' >
                    <p>{project.talents[0]?.name}</p>
                    {project?.talents?.length > 2 && <span className='text-gray text-xs'>(+ {project?.talents?.length - 1}  more talents)</span>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard