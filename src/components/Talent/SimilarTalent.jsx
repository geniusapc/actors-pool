import React from 'react'

function SimilarTalent({ talent }) {
    return (
        <div className='flex space-x-4 mb-4'>
            <div className='w-8'><img className='w-10 rounded' src={talent.photo} alt={talent.name} /></div>
            <div className='flex flex-col'>
                <span className='text-xl font-semibold'>{talent.name}</span>
                <span>{talent.profession}</span>
            </div>


        </div>
    )
}

export default SimilarTalent