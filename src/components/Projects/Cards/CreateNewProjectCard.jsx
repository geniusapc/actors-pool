import React from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_PROJECT_MODAL, openModal } from '../../../features/projects/projects';
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg"

function CreateNewProjectCard() {
    const dispatch = useDispatch()
    return (
        <div
            className="shadow-3xl flex items-center rounded-lg py-5 px-7 h-[146px] space-x-4 cursor-pointer"
            onClick={() => dispatch(openModal(CREATE_PROJECT_MODAL))}
        >
            <AddIcon />
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
