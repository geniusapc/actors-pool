import React from 'react'
import Button from '../Button/Button'
import { SERVER_BASEURL } from '../../config/keys'
import Moment from 'react-moment'

function TalentDetailsAside({ userDetails }) {
    return (
        <div className=' shadow-3xl mb-8   p-4'>
            <img src={`${SERVER_BASEURL}${userDetails.photo}`} alt={userDetails.name} />
            <div className='text-xl font-semibold mt-5'> {userDetails.name}</div>
            <div className='mt-2.5' > {userDetails.profession} .  Active since <Moment format='YYYY'>{userDetails.activeSince}</Moment></div>
            <div className='flex justify-between items-center mt-6'>
                <Button variant='primary'>Add to Project</Button>
                <span><img src="/icons/message.svg" alt="" /></span>
            </div>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <h3 className='text-gray text-xs'>Social</h3>
            <div className='flex gap-2 mt-5'>
                <a href={userDetails?.socialMedia?.fb} disabled={true}><img src="/icons/facebook.svg" alt="" /></a>
                <a href={userDetails?.socialMedia?.ig} disabled={true}><img src="/icons/instagram.svg" alt="" /></a>
                <a href={userDetails?.socialMedia?.tw}><img src="/icons/twitter.svg" alt="" /></a>
                <a href={userDetails?.socialMedia?.tik}><img src="/icons/tik-tok.svg" alt="" /></a>
                <a href={userDetails?.socialMedia?.snap}><img src="/icons/snapchat.svg" alt="" /></a>
            </div>
        </div>
    )
}

export default TalentDetailsAside