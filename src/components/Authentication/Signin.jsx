import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'

function Signin() {
    return (
        <Modal id="signin-modal">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Log In</h3>
            <form className="space-y-6" action="#">
                <Input id="email" label="Email Address" placeholder="Enter your email address" />
                <Input id="password" label="Password" placeholder="●●●●●●●●●●●●" />
                <div className='mt-4'>
                    <a className="text-sm " href="#1">Forgot Password</a>
                </div>


                <div className='flex flex-col gap-4 py-4 items-center'>
                    <Button className="mx-auto md:px-[90px]" type="submit" variant="primary">Log in</Button>

                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        New here?   <a href="#1" className="text-blue-700 hover:underline dark:text-blue-500">Create an account</a>
                    </div>
                </div>
            </form>

        </Modal>
    )
}

export default Signin