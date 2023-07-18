
import moment from 'moment';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import Modal from '../../../Modal/Modal';

const AddProfileWorkModal = ({ isModalOpen, onCloseHandler, onAddWorkHander, work, setWork }) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setWork((prev) => ({ ...prev, [name]: value }));
  };
  const currentMonthYear = moment().format('YYYY-MM')


  return (
    <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
      <form className="space-y-6" onSubmit={onAddWorkHander}>
        <Input
          id="title"
          label="Movie Title"
          placeholder="Enter Movie title"
          name="title"
          value={work?.title}
          onChange={onChangeHandler}
        />
        <Input
          id="year"
          label="Year of Production (Optional)"
          placeholder="Enter Year"
          title="year"
          type="month"
          max={currentMonthYear}
          value={work?.year}
          onChange={onChangeHandler}
        />
        <div className="flex flex-col gap-4 py-4 items-center">
          <Button className="mx-auto" type="submit" variant="primary">
            Add
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProfileWorkModal;
