import ProfileWorkCard from '../Cards/ProfileWorkCard';
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg';
import AddProfileWork from './AddProfileWork';

const ProfileWorkList = ({ openModal, workList }) => {
  if (!workList?.length) return <AddProfileWork openModal={openModal} />
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 items-center justify-center">
      <div
        className="shadow-3xl flex  rounded-lg h-[84px] px-3 space-x-4 items-center cursor-pointer"
        onClick={() => openModal()}
      >
        <AddIcon />
        <span className="text-sm font-semibold mb-2 pr-12 text-primary">
          Add a movie you featured in
        </span>
      </div>
      {workList.map((item) => (
        <ProfileWorkCard key={`${item.title}-${item.year}`} title={item.title} year={item.year} />
      ))}
    </div>
  );
};

export default ProfileWorkList;
