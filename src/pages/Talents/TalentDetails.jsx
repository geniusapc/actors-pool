import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useTalentsDataByUsername } from '../../hooks/useTalentData';
import { useParams } from 'react-router-dom';
import DataController from '../../components/DataController/DataController';
import TalentDetailsComponent from "../../components/TalentDetails/TalentDetails"


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
                Render={TalentDetailsComponent}
            />
        </Layout>
    );
}

export default TalentDetails;
