import { MyTalentDetailsAside, TalentDetailsTab, ShareProfileCard } from '../TalentDetails';
import { useMyTalentProfile } from '../../hooks/useTalentData';
import MyProfileDetailtHeader from './Headers/MyProfileDetailsHeader';
import AlertWithDescription from '../Alert/AlertWithDescription';

const MyTalentProfile = () => {
  const { data, refetch } = useMyTalentProfile();
  const talent = data?.data?.data;


  return (
    <main>
      <AlertWithDescription
        isVisible={talent?.status === "AWAIT_APPROVAL"}
        title="Attention Needed"
        description={"Your talent profile has not yet been approved. This process might take a couple of days"} />
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
