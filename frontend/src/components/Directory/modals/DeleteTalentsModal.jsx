import React from 'react';
import UpdateTalentsModalBase from './UpdateTalentsModalBase';
import { notifyError, notifySuccess } from '../../../utils/notification';
import { useBulkDeleteTalent } from '../../../hooks/useTalentData';

function DeleteTalentsModal({ isModalOpen, closeModal, refetchTalent, talents = [] }) {
    const deletableTalents = talents?.map((e) => e?._id);
    const onError = () => {
        refetchTalent();
        closeModal();
        notifyError('There was an issue deleting talent(s)');
    };
    const onSuccess = ({ data }) => {
        refetchTalent();
        closeModal();
        notifySuccess(`${data?.data?.deletedCount} talent(s) deleted successfully`);
    };

    const { mutate: deleteTalents, isLoading } = useBulkDeleteTalent(onError, onSuccess);

    const onSubmitHandler = () => {
        const payload = { ids: deletableTalents };
        deleteTalents(payload);
    };
    return (
        <UpdateTalentsModalBase
            title={'Delete Talent(s)'}
            subtitle={'Are you sure you want to delete talent(s)? This action is irreversable'}
            affectedCount={`${talents?.length} of ${talents?.length}`}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            onSubmit={onSubmitHandler}
            actionText={'Delete Talent'}
            isLoading={isLoading}
        />
    );
}

export default DeleteTalentsModal;
