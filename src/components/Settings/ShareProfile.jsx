import React from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeShareProfileModal } from '../../features/settings/settings';
import ShareProfileCard from '../TalentDetails/ShareProfile';

import { useMyTalentProfile } from '../../hooks/useTalentData';

function ShareProfile() {
    const dispatch = useDispatch();
    const { data } = useMyTalentProfile();
    const isModalOpen = useSelector((state) => state.settings.isShareProfileModalOpen);
    const onCloseHandler = () => {
        dispatch(closeShareProfileModal());
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Share Your Profile</h3>
            <p className="text-xs mb-12">Get discovered on Actor’s Pool as a talent.</p>

            <ShareProfileCard username={data?.data?.data?.username} />

            <div className="flex flex-col gap-4 py-4 items-center mt-16">
                <Button className="mx-auto md:px-[90px]" type="submit" variant="primary" onClick={onCloseHandler}>
                    Done
                </Button>
            </div>
        </Modal>
    );
}

export default ShareProfile;
