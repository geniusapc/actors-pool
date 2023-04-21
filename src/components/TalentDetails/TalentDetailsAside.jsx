import React from 'react'
import Button from '../Button/Button'

function TalentDetailsAside({ userDetails }) {
    return (
        <div className=' shadow-3xl mb-8   p-4'>
            <img src={userDetails.photo} alt={userDetails.name} />
            <div className='text-xl font-semibold mt-5'> {userDetails.name}</div>
            <div className='mt-2.5' > {userDetails.profession} . {userDetails.active}</div>
            <div className='flex justify-between items-center mt-6'>
                <Button variant='primary'>Add to Project</Button>
                <span><img src="/icons/message.svg" alt="" /></span>
            </div>
            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <h3 className='text-gray text-xs'>Social</h3>
            <div className='flex gap-2 mt-5'>
                <span><img src="/icons/facebook.svg" alt="" /></span>
                <span><img src="/icons/instagram.svg" alt="" /></span>
                <span><img src="/icons/twitter.svg" alt="" /></span>
                <span><img src="/icons/tik-tok.svg" alt="" /></span>
                <span><img src="/icons/snapchat.svg" alt="" /></span>
            </div>
        </div>
    )
}

export default TalentDetailsAside