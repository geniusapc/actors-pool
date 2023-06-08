import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionButtons from './ActionButton';
import ProfileWorkList from './ProfileWorkList';
import AddProfileWorkModal from './Modal/AddProfileWorkModal';
import { movieSchema } from '../../validation/profile';
import { notifyError } from '../../utils/notification';
import { nextStep, setFormData } from '../../features/profile/profile';

const ProfileWorks = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.createProfile.step)
  const stages = useSelector((state) => state.createProfile.stages)
  const preWorkData = stages[step - 1].data?.workList || []

  const [work, setWork] = useState({});
  const [workList, setWorkList] = useState(preWorkData);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const onCloseHandler = () => {
    setIsModalOpen(false);
    setWork({});
  };

  const onAddWorkHander = async (e) => {

    e.preventDefault();
    try {
      await movieSchema.validate(work);
      setWorkList((e) => [...e, work]);
      onCloseHandler();
    } catch (error) {
      notifyError(error?.message);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(setFormData({ step: step, data: { workList } }));
      dispatch(nextStep());
    } catch (error) {
      notifyError(error?.message);
    }
  };



  return (
    <>
      <ProfileWorkList openModal={openModal} workList={workList} />
      <form onSubmit={onSubmitHandler}>
        <ActionButtons />
      </form>

      {/* Modal */}
      <AddProfileWorkModal
        work={work}
        setWork={setWork}
        onAddWorkHander={onAddWorkHander}
        isModalOpen={isModalOpen}
        onCloseHandler={onCloseHandler}
      />
    </>
  );
};

export default ProfileWorks;
