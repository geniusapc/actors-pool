import { useSelector } from "react-redux";
import ProfileDescription from "./ProfileDescription";
import ProfileGallery from "./ProfileGallery";
import ProfileInformation from "./ProfileInformation";
import ProfileWorks from "./ProfileWorks";
import SocialAccountV2 from "./SocialAccountV2";

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
            return <SocialAccountV2 />;
        default:
            break;
    }
};
export default RenderProfileFormStep