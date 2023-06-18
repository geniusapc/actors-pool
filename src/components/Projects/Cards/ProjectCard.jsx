import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ReactComponent as ClippperBoardIcon } from '../../../assets/icons/clapperboard-play.svg';

function ProjectCard({ project }) {
    return (
        <Link
            to={`/projects/${project?._id}`}
            className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7  cursor-pointer"
        >
            <div className="flex space-x-4 mb-8">
                <ClippperBoardIcon className='mt-2' />
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
                        <div class="flex -space-x-4">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={project.talents[0]?.photo} alt="" />
                            {project.talents[1]?.photo && <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={project.talents[0]?.photo} alt="" />}

                        </div>
                        <div className="flex space-x-4 items-center">
                            <p className='space-x-2'>
                                <span>{project.talents[0]?.firstname}</span>
                                <span>{project.talents[0]?.lastname}</span>
                            </p>
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
