import React from 'react'

function TopTalentCard({ user , style="" }) {
    return (
        // h-[335px]
        <div className='h-[335px] md:h-[451px]  object-contain  relative  bg-black mb-12 pb-12 style'>
            <img className='h-[335px] md:h-[451px] ' src={user.photo} alt="" />
            <div className='absolute bottom-0 left-0 text-left text-[#ffffff]'>
                <p>{user.name}</p>
                <span >{user.profession}</span> . <span>{user.active}</span>
            </div>
        </div>
    )
}

export default TopTalentCard