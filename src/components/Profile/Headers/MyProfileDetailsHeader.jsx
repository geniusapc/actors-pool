import { useState } from 'react';
import { useEditTalent } from '../../../hooks/useTalentData';
import { notifyError, notifySuccess } from '../../../utils/notification';
import Button from '../../Button/Button';
import CheckButton from '../../Button/CheckButton';

const MyProfileDetailtHeader = ({ talent, refetch = () => { } }) => {
    const [isProfileVisible, setIsProfileVisible] = useState(talent?.isProfileVisible);

    const onClickProfileVisibility = (e) => {
        setIsProfileVisible(e.target.checked);
        updateVisibility({ id: talent?._id, data: { isProfileVisible: e.target.checked } });
    };

    const onError = () => {
        notifyError('There was an issue updating your profile');
        setIsProfileVisible((e) => !e);
    };
    const onSuccess = () => {
        refetch();
        notifySuccess('Visibility updated successfully');
    };
    const { mutate: updateVisibility } = useEditTalent(onError, onSuccess);
    return (
        <div className="hidden w-full items-center md:flex justify-end gap-8 mb-3">
            <CheckButton
                text="Make Profile Visible"
                isChecked={isProfileVisible}
                onChange={onClickProfileVisibility}
            />
            <Button variant="outlined">Hide Specific Details</Button>
            <Button variant="primary">Edit Profile</Button>
        </div>
    );
};

export default MyProfileDetailtHeader;
