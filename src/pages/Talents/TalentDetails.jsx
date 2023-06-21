import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { useTalentsDataByUsername } from '../../hooks/useTalentData';
import { useParams } from 'react-router-dom';
import DataController from '../../components/DataController/DataController';
import TalentDetailsComponent from "../../components/TalentDetails/TalentDetails"
import ListAllProjectsModal from '../../components/Projects/Modals/ListAllProjectsModal';
import { useDispatch } from 'react-redux';
import { selectTalent } from '../../features/talents/talents';


function TalentDetails() {
    const dispatch = useDispatch()
    const [talent, setTalent] = useState();
    const { username } = useParams();
    const { data, isLoading, isError } = useTalentsDataByUsername(username);

    useEffect(() => {
        if (data?.data) {
            dispatch(selectTalent(data?.data?.data))
            setTalent(data?.data?.data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Layout isAuthRequired={false}>
            <DataController
                isLoading={isLoading}
                empty={!talent}
                error={isError}
                data={talent}
                Render={TalentDetailsComponent}
            />

            {/* Modals */}
            <ListAllProjectsModal />

        </Layout>
    );
}

export default TalentDetails;
