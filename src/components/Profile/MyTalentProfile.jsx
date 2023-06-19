import MyTalentDetailsAside from '../TalentDetails/MyTalentDetailsAside';
import ShareProfileCard from '../TalentDetails/ShareProfile';
import TalentDetailsTab from '../TalentDetails/TalentDetailsTab';
import { useMyTalentProfile } from '../../hooks/useTalentData';
import MyProfileDetailtHeader from './Headers/MyProfileDetailsHeader';

const MyTalentProfile = () => {
  const { data, refetch } = useMyTalentProfile();
  const talent = data?.data?.data;

  return (
    <main>
      <MyProfileDetailtHeader talent={talent} refetch={refetch} />
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="w-[308px]">
          <MyTalentDetailsAside talent={talent} />
          <ShareProfileCard className="h-[118px]" username={talent?.username} />
        </div>
        <div className="w-full shadow-3xl">
          <TalentDetailsTab talent={talent} />
        </div>
      </div>
    </main>
  );
};

export default MyTalentProfile;
