import React from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import {
    SELECT_PROJECT_MODAL,
    addTalentToProjectHandler,
    openModal,
} from '../../features/projects/projects';

import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import SocailAccounts from './SocailAccounts';

function TalentDetailsAside({ talent }) {
    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const AddTalentToProjectHandler = () => {
        if (!isAuth) dispatch(addTalentToProjectHandler(talent));
        else dispatch(openModal(SELECT_PROJECT_MODAL));
    };

    return (
        <div className="shadow-3xl mb-8 p-4">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-85 lg:h-80 ">
                <img
                    src={`${talent?.photo}`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    alt={talent?.name}
                />
            </div>
            <div className="text-xl font-semibold mt-5"> {talent?.name}</div>
            <div className="mt-2.5 flex items-center space-x-2">
                <span>{talent?.profession}</span>
                <span className="inline-block w-[3px] h-[3px]  bg-black rounded-full"></span>
                <span>Active since</span>
                <Moment format="YYYY">{talent?.activeSince}</Moment>
            </div>
            <div className="flex justify-between items-center mt-6">
                <Button variant="primary" onClick={AddTalentToProjectHandler}>
                    Add to Project
                </Button>
                <span className="cursor-pointer">
                    <MessageIcon className="text-primary" />
                </span>
            </div>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <SocailAccounts socialMedia={talent?.socialMedia} />
        </div>
    );
}

export default TalentDetailsAside;
