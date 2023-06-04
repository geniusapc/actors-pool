import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    return (
        <Link
            to={`/projects/${project?._id}`}
            className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7  cursor-pointer"
        >
            <div className="flex space-x-4 mb-8">
                <div className="w-8 h-8">
                    <img className="w-6 h-6" src={'icons/clapperboard-play.svg'} alt="" />
                </div>
                <div className="font-semibold flex flex-col">
                    {project.name}
                    <span className="text-gray text-sm">
                        {'Created '}
                        <Moment format="Do MMMM, YYYY">{project.createdAt}</Moment>
                    </span>
                </div>
            </div>
            <div className="flex space-x-4">
                {!project.talents[0] ? (
                    <p className="text-gray text-sm ml-12">No talent</p>
                ) : (
                    <>
                        <div>
                            <img className="w-8 h-8" src={project.talents[0]?.photo} alt="" />
                        </div>
                        <div className="flex space-x-4 items-center">
                            <p>{project.talents[0]?.name}</p>
                            {project?.talents?.length > 2 && (
                                <span className="text-gray text-xs">
                                    (+ {project?.talents?.length - 1} more talents)
                                </span>
                            )}
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

export default ProjectCard;
