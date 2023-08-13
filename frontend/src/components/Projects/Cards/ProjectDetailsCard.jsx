import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';
import {
    REMOVE_TALENT_FROM_PROJECT_MODAL,
    openModal,
    setTalent,
} from '../../../features/projects/projects';

const ProjectTalentCard = ({ talent }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteTalentHandler = () => {
        dispatch(setTalent(talent));
        dispatch(openModal(REMOVE_TALENT_FROM_PROJECT_MODAL));
    };

    return (
        <div className="relative">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer"
                onClick={() => navigate(`/talents/${talent.username}`)}
            >
                <img
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    src={`${talent.photo}`}
                    alt={talent.firstname}
                />
            </div>
            <div className="absolute bottom-0 left-0  p-4 text-left text-white w-full  bg-gradient-to-t from-black to-transparent">
                <p>
                    <span className="mr-2"> {talent.firstname}</span> {talent.lastname}
                </p>
                <p>
                    <span className="capitalize mr-2">{talent.profession}</span>
                    <span className="inline-block w-2 h-2 mr-2 ml-2 bg-white rounded-full"></span>
                    <span className="mr-2">Active since</span>
                    <Moment format="YYYY">{talent.activeSince}</Moment>
                </p>
            </div>
            <div className="absolute top-2 right-2 cursor-pointer" onClick={deleteTalentHandler}>
                <DeleteIcon className=" w-12 h-12 text-primary " />
            </div>
        </div>
    );
};

export default ProjectTalentCard;
