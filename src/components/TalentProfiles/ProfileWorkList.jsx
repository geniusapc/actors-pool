import ProfileWorkCard from '../Profile/Cards/ProfileWorkCard';
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';


const workList = [];

const ProfileWorkList = ({ openModal }) => {
  if (!workList?.length)
    return (
      <div className="flex w-full items-center justify-center" onClick={openModal}>
        <div className=" shadow-3xl flex  space-x-8 rounded-lg h-[142px] w-[400px] items-center p-6">
          <AddIcon />
          <div className='flex flex-col'>
            <span className="text-sm font-semibold mb-2 pr-12 text-primary ">
              Add a movie you featured in
            </span>
            <span>
              You can add as many movies as possible
            </span>

          </div>
        </div>
      </div>
    );


  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 items-center justify-center" onClick={openModal}>
      <div className=" shadow-3xl flex  rounded-lg h-[84px] px-3 space-x-4 items-center">
        <AddIcon />
        <span className="text-sm font-semibold mb-2 pr-12 text-primary bg-gray">
          Add a movie you featured in
        </span>
      </div>
      {workList.map((item) => (
        <ProfileWorkCard title={item.title} year={item.year} />
      ))}
    </div>
  );
};

export default ProfileWorkList;
