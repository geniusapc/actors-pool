import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import {
    DELETE_PROJECT_MODAL,
    EDIT_PROJECT_MODAL,
    CLEAR_PROJECT_MODAL,
    openModal,
} from '../../features/projects/projects';

const Header = ({ project }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);

    const editModeHandler = () => {
        dispatch(openModal(EDIT_PROJECT_MODAL));
        setToggle(false)
    };

    const removeAllTalentHandler = () => {
        dispatch(openModal(CLEAR_PROJECT_MODAL));
        setToggle(false)
    };
    const deleteModeHandler = () => {
        dispatch(openModal(DELETE_PROJECT_MODAL));
        setToggle(false)
    };

    return (
        <div>
            <div className="w-full flex">
                <img src="/icons/arrow-left.svg" alt="" />
                <span className="ml-4"> Back</span>
            </div>
            <div className="flex justify-between mt-8">
                <p>
                    <span>projects/</span> <span className="font-bold">{project?.name}</span>
                </p>
                <div className="flex items-center gap-x-4">
                    <Button variant="primary">Download List</Button>
                    <div className="relative">
                        <div className="w-8">
                            <img src="/icons/more.svg" alt="" onClick={() => setToggle((e) => !e)} />
                        </div>

                        {toggle && (
                            <div className="absolute top-10 right-1 text-xs w-60 flex flex-col shadow-lg text-left gap-4 px-5 p-3 z-50">
                                <button className="text-left" onClick={editModeHandler}>
                                    Edit project details{' '}
                                </button>
                                <button className="text-left" onClick={removeAllTalentHandler}>
                                    Remove all talents
                                </button>
                                <button className="text-left" onClick={deleteModeHandler}>
                                    Delete this project
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
