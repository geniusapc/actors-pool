import React from 'react'

function Footer() {
    return (
        <div className=''>
            <div className='container mx-auto px-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-2/5'>
                    <p className='text-xl pb-4 md:pb-8 flex gap-4'> <img src="images/actors-pool-logo.svg" alt="logo" /> Actor’s Pool</p>
                    <p>© Actors Pool LLC 2022</p>
                </div>
                <div className='flex flex-col gap-8 mt-10 md:mt-0 md:flex-row justify-between w-3/5'>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Product</h3>
                        <div className='flex flex-col  gap-6'>
                            <a href="#1">About</a>
                            <a href="#1">Sign Up</a>
                            <a href="#1">Login</a>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Legal</h3>
                        <div className='flex flex-col  gap-6'>
                            <a href="#1">Privacy Policy</a>
                            <a href="#1">Terms of Service</a>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Help</h3>
                        <div className='flex flex-col  gap-6'>
                            <a href="#1">FAQ</a>
                            <a href="#1">Contact Us</a>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Follow us</h3>
                        <div className='flex flex-col gap-6'>
                            <a href="#1">TikTok</a>
                            <a href="#1">Twitter</a>
                            <a href="#1">Snapchat</a>
                            <a href="#1">Instagram</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer