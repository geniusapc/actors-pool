import { useDispatch } from "react-redux";
import { TEMP_PROJ_MODAL, openModal } from "../../features/projects/projects";
import Button from "../Button/Button";

const DirectoryHeader = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex  justify-between mb-8">
            <h1 className="text-[#040503] text-base md:text-3xl font-bold ">Talents Directory</h1>
            <div className="flex gap-2">
                <Button
                    variant="primary"
                    onClick={() => dispatch(openModal(TEMP_PROJ_MODAL))}
                    className="text-black"
                >
                    View Project
                </Button>
                <Button variant="outlined" className="text-black cursor-not-allowed">
                    filter
                </Button>
            </div>
        </div>
    )
}
export default DirectoryHeader