import TalentDetailsAbout from "./TalentDetailsAbout";
import TalentDetailsGallery from "./TalentDetailsGallery";
import TalentDetailsMovies from "./TalentDetailsMovies";

const RenderProfileTab = ({ hash, talent }) => {
    switch (hash) {
        case '#gallery':
            return <TalentDetailsGallery talent={talent} />;
        case '#movies':
            return <TalentDetailsMovies talent={talent} />;
        default:
            return <TalentDetailsAbout talent={talent} />;
    }
};
export default RenderProfileTab
