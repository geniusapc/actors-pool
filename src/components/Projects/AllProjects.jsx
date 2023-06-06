import React from 'react';
import CreateNewProjectCard from './Cards/CreateNewProjectCard';
import ProjectCard from './Cards/ProjectCard';

function AllProjects({ data }) {
    return (
        <>
            <h1 className="text-3xl mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-start content-center">
                <CreateNewProjectCard />
                {data?.map((project) => (
                    <ProjectCard key={project?._id} project={project} />
                ))}
            </div>
        </>
    );
}

export default AllProjects;
