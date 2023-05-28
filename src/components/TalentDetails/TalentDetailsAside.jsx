import React from 'react'
import Button from '../Button/Button'
import { SERVER_BASEURL } from '../../config/keys'
import Moment from 'react-moment'

function TalentDetailsAside({ talent }) {
    return (
        <div className=' shadow-3xl mb-8   p-4'>
            <div className="h-[308px] w-[298px]" >

                <img src={`${SERVER_BASEURL}${talent.photo}`} className="h-[308px] w-[298px]" alt={talent.name} />
            </div>
            <div className='text-xl font-semibold mt-5'> {talent.name}</div>
            <div className='mt-2.5' > {talent.profession}      <span className="inline-block w-2 h-2 mr-2 ml-2 bg-white rounded-full"></span>  Active since <Moment format='YYYY'>{talent.activeSince}</Moment></div>
            <div className='flex justify-between items-center mt-6'>
                <Button variant='primary'>Add to Project</Button>
                <span><img src="/icons/message.svg" alt="" /></span>
            </div>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <h3 className='text-gray text-xs'>Social</h3>
            <div className='flex gap-2 mt-5'>
                <a href={talent?.socialMedia?.fb} ><img src="/icons/facebook.svg" alt="" /></a>
                <a href={talent?.socialMedia?.ig}><img src="/icons/instagram.svg" alt="" /></a>
                <a href={talent?.socialMedia?.tw}><img src="/icons/twitter.svg" alt="" /></a>
                <a href={talent?.socialMedia?.tik}><img src="/icons/tik-tok.svg" alt="" /></a>
                <a href={talent?.socialMedia?.snap}><img src="/icons/snapchat.svg" alt="" /></a>
            </div>
        </div>
    )
}

export default TalentDetailsAside