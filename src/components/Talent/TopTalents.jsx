import React from 'react'
import TopTalentCard from './TopTalentCard'
import { useTopTalents } from '../../hooks/useTalentData'


function Toptalents() {
    const { data } = useTopTalents()
    let topTalents = data?.data?.data?.splice(0, 3)

    return (
        <section className=' text-center bg-[#EFECE6] py-10 md:py-24  '>
            <div className='container mx-auto px-5 items-center'>
                <div>
                    <h2 className='text-xl   md:text-4xl font-semibold mb-4'>Top Talents</h2>
                    <h3>Famous for their outstanding works in their industries in the past decades</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mt-20 w-full' >
                    {topTalents?.map((user) => <TopTalentCard key={user._id} talent={user} />)}
                </div>

            </div>
        </section>
    )
}

export default Toptalents