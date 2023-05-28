import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import SimilarTalents from '../components/Talent/SimilarTalents';
import TalentDetailsAbout from '../components/TalentDetails/TalentDetailsAbout';
import TalentDetailsAside from '../components/TalentDetails/TalentDetailsAside';
import TalentDetailsGallery from '../components/TalentDetails/TalentDetailsGallery';
import TalentDetailsMovies from '../components/TalentDetails/TalentDetailsMovies';
import TalentDetailsTab from '../components/TalentDetails/TalentDetailsTab';
import { useTalentsDataByID } from '../hooks/useTalentData';
import { useLocation, useParams } from 'react-router-dom';
import DataController from '../components/DataController/DataController';

function TalentDetails() {
    let location = useLocation();
    const [talent, setTalent] = useState();
    const { id } = useParams();
    const { data, isLoading } = useTalentsDataByID(id);

    useEffect(() => {
        if (data?.data) setTalent(data?.data?.data);
    }, [data]);

    return (
        <Layout>
            <DataController isLoading={isLoading} empty={!talent}>
                {talent && (
                    <div className="flex w-full gap-8">
                        <div className="w-[308px]">
                            <TalentDetailsAside talent={talent} />
                            <SimilarTalents />
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
                )}
            </DataController>
        </Layout>
    );
}

export default TalentDetails;
