import React from 'react';
import UpdateTalentsModalBase from './UpdateTalentsModalBase';
import { useBulkUpdateTalentVisibility } from '../../../hooks/useTalentData';
import { notifyError, notifySuccess } from '../../../utils/notification';

function MakeTalentInvisibleModal({ isModalOpen, closeModal, refetchTalent, talents = [] }) {
    const filteredTalent = talents?.filter((e) => e?.isProfileVisible)?.map((e) => e?._id);

    const onCloseHandler = () => {
        closeModal();
    };
    const onError = () => {
        refetchTalent();
        onCloseHandler();
        notifyError('There was an issue turning talents visibility off');
    };
    const onSuccess = (e) => {
        refetchTalent();
        onCloseHandler();
        notifySuccess(`${e?.data?.data?.modifiedCount} talent(s) profile now invisible`);
    };
    const onSubmitHandler = () => {
        const payload = { ids: filteredTalent, mode: 'OFF' };
        makeTalentinVisible(payload);
    };

    const { mutate: makeTalentinVisible, isLoading } = useBulkUpdateTalentVisibility(
        onError,
        onSuccess
    );

    return (
        <UpdateTalentsModalBase
            actionText={'Turn off visible'}
            affectedCount={`${filteredTalent?.length} of ${talents?.length}`}
            closeModal={onCloseHandler}
            isModalOpen={isModalOpen}
            onSubmit={onSubmitHandler}
            title={'Talent Visibility'}
            subtitle={'Are you sure you want to turn off talent visibility?'}
            isLoading={isLoading}
        />
    );
}

export default MakeTalentInvisibleModal;
