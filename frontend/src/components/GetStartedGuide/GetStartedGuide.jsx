import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import React from 'react';
import { openSignUpModal } from '../../features/auth/auth';

function GetStartedGuide() {
    const dispatch = useDispatch();
    return (
        <section className="bg-white100 w-full h-full">
            <div className=" bg-mystery-bg  bg-cover w-full h-full container mx-auto flex  flex-col md:flex-row  gap-x-4 gap-y-6 px-4 py-12  ">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <div className="text-2xl md:text-[48px]   mb-6 font-bold">List Yourself as a Talent</div>
                    <p className="mb-8">
                        Are you an actor or entertainer looking to gain more visibility? You can list yourself
                        on Actor’s pool as a talent and get noticed by creative directors and managers looking
                        for talents for their next big project.
                    </p>
                    <Button
                        variant="primary"
                        className="w-[170px]"
                        onClick={() => dispatch(openSignUpModal())}
                    >
                        Get Started{' '}
                    </Button>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="w-full" src="images/getting_started.svg" alt="get started" />
                </div>
            </div>
        </section>
    );
}

export default GetStartedGuide;
