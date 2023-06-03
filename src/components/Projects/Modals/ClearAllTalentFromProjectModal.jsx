import React from 'react'
import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import { CLEAR_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useDispatch, useSelector } from 'react-redux';

function ClearAllTalentFromProjectModal() {
    const dispatch = useDispatch()
    const isModalOpen = useSelector((state) => state.projects[CLEAR_PROJECT_MODAL]);
    const onCloseHandler = () => {
        dispatch(closeModal(CLEAR_PROJECT_MODAL))
    }

    const onRemoveTalentHandler = () => {
        onCloseHandler()
    }
    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <div className='flex flex-col items-center text-center gap-8'>
                <h2 className='font-bold text-xl'>Remove All Talents</h2>
                <img src="/icons/delete.svg" className='w-16 bg-white' alt="delete-icon" />
                <p className='text-gray300'>Are you sure you want to remove all the talents you added to this project? </p>

                <div className='mt-16 flex gap-2'>
                    <Button variant='outlined' className='w-48' onClick={onRemoveTalentHandler} >Remove Talents</Button>
                    <Button variant='primary' className='w-48' onClick={onCloseHandler}>Cancel</Button>
                </div>

            </div>
        </Modal>
    )
}

export default ClearAllTalentFromProjectModal