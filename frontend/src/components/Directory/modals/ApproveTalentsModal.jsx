import React from 'react';
import UpdateTalentsModalBase from './UpdateTalentsModalBase';
import { STATUS } from '../constants';
import { notifyError, notifySuccess } from '../../../utils/notification';
import { useBulkUpdateTalentStatus } from '../../../hooks/useTalentData';

function ApproveTalentsModal({ isModalOpen, closeModal, refetchTalent, talents = [] }) {
    const approvableTalent = talents?.filter((e) => e?.status !== STATUS.APPROVED)?.map((e) => e?._id)

    const onError = () => {
        refetchTalent();
        closeModal();
        notifyError('There was an issue approving talent(s)');
    };
    const onSuccess = (e) => {
        refetchTalent();
        closeModal();
        notifySuccess(`${e?.data?.data?.modifiedCount} talent(s) approved successfully`);
    };

    const { mutate: approveTalents, isLoading } = useBulkUpdateTalentStatus(
        onError,
        onSuccess
    );

    const onSubmitHandler = () => {
        const payload = { ids: approvableTalent, mode: 'APPROVED' };
        approveTalents(payload);
    };

    return (
        <UpdateTalentsModalBase
            title={'Approve'}
            subtitle={'Are you sure you want to approve talents?'}
            actionText={'Approve Talent(s)'}
            affectedCount={`${approvableTalent?.length} of ${talents?.length}`}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            onSubmit={onSubmitHandler}
            isLoading={isLoading}
        />
    );
}

export default ApproveTalentsModal;
