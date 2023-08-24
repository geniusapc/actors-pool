import React from 'react';
import UpdateTalentsModalBase from './UpdateTalentsModalBase';
import { useBulkUpdateTalentVisibility } from '../../../hooks/useTalentData';
import { notifyError, notifySuccess } from '../../../utils/notification';

function MakeTalentVisibleModal({
    isModalOpen,
    closeModal,
    refetchTalent = () => { },
    talents = [],
}) {
    const filteredTalent = talents?.filter((e) => !e?.isProfileVisible)?.map((e) => e?._id);

    const onError = () => {
        refetchTalent();
        closeModal();
        notifyError('There was an issue turning on talent visibility');
    };
    const onSuccess = (e) => {
        refetchTalent();
        closeModal();
        notifySuccess(`${e?.data?.data?.modifiedCount} talent(s) profile now visible`);
    };

    const { mutate: makeTalentVisible, isLoading } = useBulkUpdateTalentVisibility(
        onError,
        onSuccess
    );

    const onMakeTalentVisible = () => {
        const payload = { ids: filteredTalent, mode: 'ON' };
        makeTalentVisible(payload);
    };

    return (
        <UpdateTalentsModalBase
            actionText={'Make visible'}
            affectedCount={`${filteredTalent?.length} of ${talents?.length} `}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            onSubmit={onMakeTalentVisible}
            title={'Talent Visibility'}
            subtitle={'Are you sure you want to turn on talent visibility?'}
            isLoading={isLoading}
        />
    );
}

export default MakeTalentVisibleModal;
