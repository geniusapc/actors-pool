import React from 'react'
import Layout from '../components/Layout/Layout'

function Settings() {
    return (
        <Layout>
            <h1 className='text-3xl mb-8 font-semibold text-center'>Settings</h1>
            <div className='grid grid-cols-2 gap-2 justify-start content-center mx-20'>
                <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7 '>
                    <h1 className='text-xl mb-6 font-semibold'>Account</h1>
                    <ul className='space-y-4 '>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Password <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Share profile <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Deactivate or delete account <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                    </ul>
                </div>
                <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7 '>
                    <h1 className='text-xl mb-6 font-semibold'>Help</h1>
                    <ul className='space-y-4 '>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Contact us <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Frequently asked questions <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Terms and conditions <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                    </ul>
                </div>
                <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7 '>
                    <h1 className='text-xl mb-6 font-semibold'>Interactions</h1>
                    <ul className='space-y-4 '>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Receive direct messages <input type="checkbox" name="" id="" checked /></li>
                        <li className='flex justify-between text-gray300 cursor-pointer'>Make talent profile visible <input type="checkbox" name="" id="" checked /></li>
                    </ul>
                </div>
            </div>

        </Layout>
    )
}

export default Settings