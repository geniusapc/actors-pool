import { useSelector } from "react-redux";
import ProfileDescription from "../TalentProfiles/ProfileDescription";
import ProfileGallery from "../TalentProfiles/ProfileGallery";
import ProfileInformation from "../TalentProfiles/ProfileInformation";
import ProfileWorks from "../TalentProfiles/ProfileWorks";
import SocialAccount from "../TalentProfiles/SocialAccount";

const RenderProfileFormStep = () => {
    const step = useSelector((state) => state.createProfile.step);
    switch (step) {
        case 1:
            return <ProfileInformation />;
        case 2:
            return <ProfileDescription />;
        case 3:
            return <ProfileWorks />;
        case 4:
            return <ProfileGallery />;
        case 5:
            return <SocialAccount />;
        default:
            break;
    }
};
export default RenderProfileFormStep