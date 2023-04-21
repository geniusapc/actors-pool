import React from 'react'

function InteractionCard() {
    return (
        <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7 '>
            <h1 className='text-xl mb-6 font-semibold'>Interactions</h1>
            <ul className='space-y-4 '>
                <li className='flex justify-between text-gray300 cursor-pointer'>Receive direct messages <input type="checkbox" name="" id="" checked /></li>
                <li className='flex justify-between text-gray300 cursor-pointer'>Make talent profile visible <input type="checkbox" name="" id="" checked /></li>
            </ul>
        </div>
    )
}

export default InteractionCard