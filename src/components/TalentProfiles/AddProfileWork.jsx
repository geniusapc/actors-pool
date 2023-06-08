import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
const AddProfileWork = ({ openModal }) => {
  return (
    <div>
      <div className="border-border100 border" />
      <div className="flex flex-col justify-center items-center">
        <div className="border border-primary rounded-lg mt-10 px-8 py-14 bg-gray200 cursor-pointer" onClick={() => openModal()}>
          <div className="flex justify-center items-center">
            <AddIcon className="mr-8" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-primary mb-1.5">
                Add a movie you featured in
              </span>
              <span className="text-gray text-xs">You can add as many movies as possible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfileWork;
