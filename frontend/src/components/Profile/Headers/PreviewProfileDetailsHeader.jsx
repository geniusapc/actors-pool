import { notifyError, } from '../../../utils/notification';
import Button from '../../Button/Button';
import { useAddTalent } from '../../../hooks/useTalentData';

const PreviewProfileDetailsHeader = ({ talent, onSubmitSucces = () => { } }) => {
    const onSuccess = () => {
        onSubmitSucces()
    };
    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };
    const { mutate: addTalent, isLoading } = useAddTalent(onError, onSuccess);

    const onPublishHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstname', talent.firstname);
        formData.append('lastname', talent.lastname);
        formData.append('country', talent.country);
        formData.append('state', talent.state);
        formData.append('gender', talent.gender);
        formData.append('activeSince', talent.activeSince);
        formData.append('phoneNumber', talent.phoneNumber);
        formData.append('profession', talent.profession);
        formData.append('about', talent?.about);
        talent.gallery.forEach((element) => {
            formData.append('gallery', element);
        });
        talent.workList.forEach((element, index) => {
            formData.append(`movies[${index}][title]`, element?.title);
            if (element?.year) formData.append(`movies[${index}][year]`, element?.year);
        });

        addTalent(formData);
    };

    return (
        <div className="hidden w-full items-center md:flex justify-end gap-8 mb-3">
            <Button variant="outlined">Save as Draft</Button>
            <Button variant="primary" onClick={onPublishHandler} isLoading={isLoading}>Publish</Button>
        </div>
    );
};

export default PreviewProfileDetailsHeader;