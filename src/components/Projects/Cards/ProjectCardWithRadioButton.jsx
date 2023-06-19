import React from 'react';
import { ReactComponent as ActiveButtonIcon } from '../../../assets/icons/active-radio-checked.svg';
import { ReactComponent as RadioButtonIcon } from '../../../assets/icons/radio-box.svg';

function ProjectCardWithRadioButton({ project, onClick, isChecked }) {
    const isCheckedClass = isChecked && 'border border-primary';
    const talents = project?.talents;

    return (
        <div
            key={project?._id}
            className={`shadow-3xl flex  flex-col  rounded-lg py-5 px-7  cursor-pointer relative ${isCheckedClass}`}
            onClick={() => onClick(project)}
        >
            <div className="absolute top-4 right-4">
                {isChecked ? <ActiveButtonIcon /> : <RadioButtonIcon />}
            </div>
            <div className="font-semibold flex flex-col capitalize">{project?.name}</div>
            {!talents?.[0] && <span className="text-gray400  text-xs">No Talent</span>}

            <div className="flex space-x-4 mt-2">
                <div className="flex -space-x-4">
                    {talents?.[0]?.photo && (
                        <img
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                            src={talents?.[0]?.photo}
                            alt=""
                        />
                    )}
                    {talents?.[1]?.photo && (
                        <img
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                            src={project.talents?.[1]?.photo}
                            alt=""
                        />
                    )}
                </div>
                <div className="flex space-x-4 items-center">
                    <p className="space-x-2">
                        <span>{project.talents[0]?.firstname}</span>
                        <span>{project.talents[0]?.lastname}</span>
                    </p>
                    {talents?.length > 2 && (
                        <span className="text-gray text-xs">(+ {talents?.length - 1} more talents)</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCardWithRadioButton;
