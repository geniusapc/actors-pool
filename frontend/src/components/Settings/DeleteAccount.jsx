import React from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'

function DeleteAccount() {
    return (
        <Modal id="delete-account-modal">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Delete Account</h3>
            <p className='text-xs mb-12'>We will not like to see you go</p>

            <form class="space-y-6" action="#">
                <Input id="reason" label="Reason for deleting your account" placeholder="Select reason" />
                <div className='flex flex-col gap-4 py-4 items-center'>
                    <Button className="mx-auto md:px-[90px]" type="submit" variant="primary">Continue</Button>
                </div>
            </form>
        </Modal>
    )
}

export default DeleteAccount