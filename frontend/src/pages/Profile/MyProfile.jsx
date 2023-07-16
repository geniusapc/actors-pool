import { Layout } from '../../components/Layout';
import DataController from '../../components/DataController/DataController';
import { useMyTalentProfile } from '../../hooks/useTalentData';
import EmptyProfileCard from '../../components/Profile/Cards/EmptyProfileCard';
import { MyTalentProfile } from '../../components/Profile';
import { useSelector } from 'react-redux';

function MyProfile() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const { data, isLoading, isError, refetch } = useMyTalentProfile({ enabled: isAuth });

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
