import React, { useState } from "react";
import AddProfileWork from "./AddProfileWork";
import AddProfileWorkForm from "./AddProfileWorkForm";
import ProfileWorkList from "./ProfileWorkList";
import Modal from '../Modal/Modal';
import ActionButtons from "./ActionButton";


const ProfileWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onCloseHandler = () => {
    setIsModalOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  return (
    <div>
      <ProfileWorkList onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
        <AddProfileWork />
        <AddProfileWorkForm />
      </Modal>
      <ActionButtons />
    </div>
  );
};

export default ProfileWorks;
