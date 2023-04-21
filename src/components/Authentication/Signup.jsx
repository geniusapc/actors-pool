import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'


function Signup() {
    return (
        <Modal id="signup-modal">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Account</h3>
            <p className='text-xs' > Connect with millions of entertainers and list yourself as a talent. </p >
            <form class="space-y-6 mt-12" action="#">
                <Input id="firstName" label="First Name" placeholder="Enter your first name" />
                <Input id="email" label="Email Address" placeholder="Enter your email address" />
                <Input id="password" label="Choose Password" placeholder="●●●●●●●●●●●●" />

                <div className='flex flex-col gap-4 py-4 items-center'>
                    <Button className="mx-auto" type="submit" variant="primary">Create Account</Button>

                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account?  <a href="#1" class="text-blue-700 hover:underline dark:text-blue-500">Log in</a>
                    </div>
                </div>


            </form>

        </Modal >
    )
}

export default Signup