import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
// import SimilarTalents from '../components/Talent/SimilarTalents';
import TalentDetailsAbout from '../components/TalentDetails/TalentDetailsAbout';
import TalentDetailsAside from '../components/TalentDetails/TalentDetailsAside';
import TalentDetailsGallery from '../components/TalentDetails/TalentDetailsGallery';
import TalentDetailsMovies from '../components/TalentDetails/TalentDetailsMovies';
import TalentDetailsTab from '../components/TalentDetails/TalentDetailsTab';
import { useTalentsDataByUsername } from '../hooks/useTalentData';
import { useLocation, useParams } from 'react-router-dom';
import DataController from '../components/DataController/DataController';

const RenderComponent = ({ data: talent }) => {
    let location = useLocation();
    return (
        <div className="flex w-full gap-8">
            <div className="w-[308px]">
                <TalentDetailsAside talent={talent} />
                {/* <SimilarTalents /> */}
            </div>
            <div className="w-3/4 shadow-3xl">
                <TalentDetailsTab hash={location.hash} />
                {(location.hash === '#about' || location.hash === '') && (
                    <TalentDetailsAbout talent={talent} />
                )}
                {location.hash === '#gallery' && <TalentDetailsGallery talent={talent} />}
                {location.hash === '#movies' && <TalentDetailsMovies talent={talent} />}
            </div>
        </div>
    );
};

function TalentDetails() {
    const [talent, setTalent] = useState();
    const { username } = useParams();
    const { data, isLoading, isError } = useTalentsDataByUsername(username);

    useEffect(() => {
        if (data?.data) setTalent(data?.data?.data);
    }, [data]);

    return (
        <Layout isAuthRequired={false}>
            <DataController
                isLoading={isLoading}
                empty={!talent}
                error={isError}
                data={talent}
                Render={RenderComponent}
            />
        </Layout>
    );
}

export default TalentDetails;
