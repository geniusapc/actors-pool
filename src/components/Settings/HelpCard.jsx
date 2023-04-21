import React from 'react'

function HelpCard() {
    return (
        <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7 '>
            <h1 className='text-xl mb-6 font-semibold'>Help</h1>
            <ul className='space-y-4 '>
                <li className='flex justify-between text-gray300 cursor-pointer'>Contact us <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                <li className='flex justify-between text-gray300 cursor-pointer'>Frequently asked questions <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
                <li className='flex justify-between text-gray300 cursor-pointer'>Terms and conditions <img src="/icons/arrow-next.svg" alt="arrow-next" /></li>
            </ul>
        </div>
    )
}

export default HelpCard