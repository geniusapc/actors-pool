import React from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'

function ChangePassword() {
    return (
        <Modal id="change-password-modal">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
            <p className='text-xs mb-12' >Enter your new password below</p >

            <form class="space-y-6" action="#">
                <Input id="password" label="New Password" placeholder="●●●●●●●●●●●●" />
                <Input id="confirm-password" label="Re-Enter Password" placeholder="●●●●●●●●●●●●" />
                <div className='flex flex-col gap-4 py-4 items-center'>
                    <Button className="mx-auto md:px-[90px]" type="submit" variant="primary">Change Password</Button>
                </div>
            </form>
        </Modal>
    )
}

export default ChangePassword