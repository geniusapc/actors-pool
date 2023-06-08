import { Layout } from '../../components/Layout';
import DataController from '../../components/DataController/DataController';
import { useMyTalentProfile } from '../../hooks/useTalentData';
import EmptyProfileCard from '../../components/Profile/Cards/EmptyProfileCard';
import { MyTalentProfile } from '../../components/Profile';

function MyProfile() {
    const { data, isLoading, isError, refetch } = useMyTalentProfile();

    const talent = data?.data?.data;

    return (
        <Layout>
            <DataController
                error={isError}
                refetch={refetch}
                isLoading={isLoading}
                data={talent}
                empty={!talent}
                Render={MyTalentProfile}
                emptyComponent={EmptyProfileCard}
            />
        </Layout>
    );
}

export default MyProfile;
