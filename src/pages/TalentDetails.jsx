import Layout from '../components/Layout/Layout'
import SimilarTalents from '../components/Talent/SimilarTalents';
import TalentDetailsAbout from '../components/TalentDetails/TalentDetailsAbout';
import TalentDetailsAside from '../components/TalentDetails/TalentDetailsAside';
import TalentDetailsGallery from '../components/TalentDetails/TalentDetailsGallery';
import TalentDetailsMovies from '../components/TalentDetails/TalentDetailsMovies';
import TalentDetailsTab from '../components/TalentDetails/TalentDetailsTab';
import { userDetails } from '../mockData/user'
import { useLocation } from 'react-router-dom';

function TalentDetails() {
    let location = useLocation();
    return (
        <Layout>
            <div className='flex w-full gap-8'>
                <div className='w-1/4 '>
                    <TalentDetailsAside userDetails={userDetails} />
                    <SimilarTalents />
                </div>
                <div className='w-3/4 shadow-3xl'>
                    <TalentDetailsTab hash={location.hash} />
                    {(location.hash === "#about" || location.hash === "") && <TalentDetailsAbout talent={userDetails} />}
                    {location.hash === "#gallery" && <TalentDetailsGallery talent={userDetails} />}
                    {location.hash === "#movies" && <TalentDetailsMovies talent={userDetails} />}
                </div>
            </div>
        </Layout>
    )
}

export default TalentDetails