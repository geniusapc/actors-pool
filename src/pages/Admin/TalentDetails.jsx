import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { useTalentsDataByUsername } from '../../hooks/useTalentData';
import { useParams } from 'react-router-dom';
import DataController from '../../components/DataController/DataController';
import { TalentFullDetails } from '../../components/TalentDetails';
import { useDispatch } from 'react-redux';
import { selectTalent } from '../../features/talents/talents';

function TalentDetails() {
    const dispatch = useDispatch();
    const [talent, setTalent] = useState();
    const { username } = useParams();
    const { data, isLoading, isError } = useTalentsDataByUsername(username);

    useEffect(() => {
        if (data?.data) {
            dispatch(selectTalent(data?.data?.data));
            setTalent(data?.data?.data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <DataController
            isLoading={isLoading}
            empty={!talent}
            error={isError}
            data={talent}
        Render={TalentFullDetails}
        />
    );
}

export default TalentDetails;
