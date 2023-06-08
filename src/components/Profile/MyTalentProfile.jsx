import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import MyTalentDetailsAside from "../TalentDetails/MyTalentDetailsAside";
import ShareProfileCard from "../TalentDetails/ShareProfile";
import TalentDetailsTab from "../TalentDetails/TalentDetailsTab";
import TalentDetailsAbout from "../TalentDetails/TalentDetailsAbout";
import TalentDetailsGallery from "../TalentDetails/TalentDetailsGallery";
import TalentDetailsMovies from "../TalentDetails/TalentDetailsMovies";

const RenderProfileTab = ({ hash, talent }) => {
    switch (hash) {
        case "#gallery":
            return <TalentDetailsGallery talent={talent} />
        case "#movies":
            return <TalentDetailsMovies talent={talent} />
        default:
            return <TalentDetailsAbout talent={talent} />
    }
}


const MyTalentProfile = ({ data: talent }) => {
    let location = useLocation();


    return (
        <div>
            <div className="hidden w-full items-center md:flex justify-end gap-8 mb-3">
                <div>
                    <input type="checkbox" name="" id="" checked /> Make Profile Visible
                </div>
                <Button variant="outlined">Hide Specific Details</Button>
                <Button variant="primary">Edit Profile</Button>
            </div>

            <div className=" flex flex-col md:flex-row w-full gap-8">
                <div className="w-[308px]">
                    <MyTalentDetailsAside talent={talent} />
                    <ShareProfileCard className="h-[118px]" username={talent?.username} />
                </div>
                <div className="w-full shadow-3xl">
                    <TalentDetailsTab hash={location.hash} />
                    <RenderProfileTab hash={location.hash} talent={talent} />
                </div>
            </div>
        </div>
    );
};

export default MyTalentProfile;
