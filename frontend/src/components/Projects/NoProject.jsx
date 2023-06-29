import { useDispatch } from 'react-redux';
import { CREATE_PROJECT_MODAL, openModal } from '../../features/projects/projects';
import Button from '../Button/Button';

const NoProject = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center text-center gap-10">
            <img className='h-24' src="/icons/empty-type-2.svg" alt="" />
            <article>
                <h2 className="text-3xl  font-bold">You don't have any project</h2>
                <p className="text-gray300">You can add as many projects as possible</p>
            </article>
            <Button variant="primary" onClick={() => dispatch(openModal(CREATE_PROJECT_MODAL))}>
                Add Project
            </Button>
        </div>
    );
};

export default NoProject;
