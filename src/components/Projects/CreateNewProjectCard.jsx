import React from 'react';
import { useDispatch } from 'react-redux';
import { openProjModal } from '../../features/projects/projects';

function CreateNewProjectCard() {
    const dispatch = useDispatch()
    return (
        <div
            className="shadow-3xl flex items-center rounded-lg py-5 px-7 h-[146px] space-x-4 cursor-pointer"
            onClick={() => dispatch(openProjModal())}
        >
            <img className="h-8 w-8 mb-4" src="icons/add-icon-large.svg" alt="add-icon-large" />
            <div>
                <span className="font-semibold block text-sm text-primary mb-1.5">
                    Create a new project
                </span>
                <p className="text-[#979797] text-xs">
                    You can add actors you intend to work with on this project afterwards
                </p>
            </div>
        </div>
    );
}

export default CreateNewProjectCard;
