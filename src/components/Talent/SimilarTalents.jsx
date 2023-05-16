import React from 'react'
import SimilarTalent from './SimilarTalent'
import { topTalent } from '../../mockData/user'



function SimilarTalents() {
    return (
        <div className='shadow-3xl mb-8  p-4'>
            <h3 className='text-gray text-xl mb-5'>Similar Talents</h3>
            {topTalent.slice(0, 3).map((talent) => <SimilarTalent key={talent?._id} talent={talent} />)}
        </div>
    )
}

export default SimilarTalents