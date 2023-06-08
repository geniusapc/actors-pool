import React from 'react'

function ShareProfileCard({ className, username }) {
    const copyProfileHandler = () => {

    }
    return (
        <div className={`shadow-3xl p-4 rounded space-y-4 ${className}`}>
            <p className="text-sm text-gray300">Your profile link</p>
            <div className="flex justify-between text-sm">
                <span className='w-4/5  break-words'>actorspool.com/{username}</span>
                <div className='flex items-center gap-1 select-none cursor-pointer' onClick={copyProfileHandler} >
                    <div className='w-3 h-3 bg-primary'></div>
                    <span className='text-primary'>copy</span>
                </div>
            </div>
        </div>
    )
}

export default ShareProfileCard