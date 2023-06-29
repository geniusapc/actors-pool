import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { openModal, ADD_TALENT_TO_PROJECT_MODAL } from '../../features/projects/projects';

const NoTalent = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center text-center gap-10">
            <img src="/icons/empty-type-2.svg" className='h-28' alt="" />
            <article>
                <h2 className="text-3xl  font-bold">You have not added any talent to this project</h2>
                <p className="text-gray300">You can add as many talents as possible</p>
            </article>
            <Button variant="primary" onClick={() => dispatch(openModal(ADD_TALENT_TO_PROJECT_MODAL))}>
                Add Talent
            </Button>
        </div>
    );
};

export default NoTalent;
