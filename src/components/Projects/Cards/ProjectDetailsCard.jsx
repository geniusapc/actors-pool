import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SERVER_BASEURL } from "../../../config/keys";
import Moment from "react-moment";
import { REMOVE_TALENT_FROM_PROJECT_MODAL, openModal } from "../../../features/projects/projects";

const ProjectTalentCard = ({ talent }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteTalentHandler = () => {
        dispatch(openModal(REMOVE_TALENT_FROM_PROJECT_MODAL))

    };

    return (
        <div className=" h-[292px] w-full md:w-[292px] relative  bg-black mb-12 pb-8">
            <div className=" w-full h-full" onClick={() => navigate(`/talent/${talent.username}`)}>
                <img
                    className="object-contain w-full h-full"
                    src={`${SERVER_BASEURL}${talent.photo}`}
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 left-0  pl-4 pb-4 text-left text-[#ffffff] bg-black w-full">
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
            <div className="absolute top-2 right-2" onClick={deleteTalentHandler}>
                <img src="/icons/delete.svg" className="w-8 h-8" alt="" />
            </div>
        </div>
    );
};

export default ProjectTalentCard
