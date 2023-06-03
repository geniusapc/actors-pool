import { useDispatch } from "react-redux";
import { TEMP_PROJ_MODAL, openModal } from "../../features/projects/projects";
import Button from "../Button/Button";

const DirectoryHeader = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex  justify-between mb-8">
            <h1 className="text-[#040503] text-3xl ">Talents Directory</h1>
            <div className="flex gap-2">
                <Button
                    variant="primary"
                    onClick={() => dispatch(openModal(TEMP_PROJ_MODAL))}
                    className="text-black"
                >
                    View Project
                </Button>
                <Button variant="outlined" className="text-black">
                    filter
                </Button>
            </div>
        </div>
    )
}
export default DirectoryHeader