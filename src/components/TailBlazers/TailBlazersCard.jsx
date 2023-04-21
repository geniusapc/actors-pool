import React from 'react'

function TailBlazersCard({ user }) {
    return (
        <div>
            <img className='h-[335px] md:h-[451px]  object-contain' src={user.photo} alt="" />
            <div className='text-left flex flex-col '>
                <p className='flex justify-between item-center py-2'>{user.name} <span className='item'><img height="451px" src="/images/arrow-point-up.svg" alt="" /></span></p>
                <span>{user.profession} .{user.active}</span>

            </div>
        </div>
    )
}

export default TailBlazersCard