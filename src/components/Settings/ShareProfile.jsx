import React from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeShareProfileModal } from '../../features/settings/settings';

function ShareProfile() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.settings.isShareProfileModalOpen);
    const onCloseHandler = () => {
        dispatch(closeShareProfileModal());
    };

    const copyProfileHandler = () => {

    }

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Share Your Profile</h3>
            <p className="text-xs mb-12">Get discovered on Actor’s Pool as a talent.</p>

            <div className="shadow-3xl p-4 rounded space-y-4">
                <p className="text-xs text-gray300">Your profile link</p>
                <div className="flex justify-between text-sm">
                    <span>Actorspool.com/genevievennaji002</span>
                    <div className='flex items-center gap-1 select-none cursor-pointer' onClick={copyProfileHandler} >
                        <div className='w-3 h-3 bg-primary'></div>
                        <span className='text-primary'>copy</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 py-4 items-center mt-16">
                <Button className="mx-auto md:px-[90px]" type="submit" variant="primary">
                    Done
                </Button>
            </div>
        </Modal>
    );
}

export default ShareProfile;
