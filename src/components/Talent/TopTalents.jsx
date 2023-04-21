import React from 'react'
import { topTalent } from '../../mockData/user'
import TopTalentCard from './TopTalentCard'


function Toptalents() {
    return (
        <section className='container mx-auto flex flex-col items-center text-center bg-[ #EFECE6] py-10 md:py-24  '>
            <div>
                <h2 className='text-xl   md:text-4xl font-semibold mb-4'>Top Talents</h2>
                <h3>Famous for their outstanding works in their industries in the past decades</h3>
            </div>

            <div className='flex flex-row flex-wrap  justify-around mt-20 w-full' >
                {topTalent.slice(0, 3).map((user) => <TopTalentCard key={user.name} user={user} />)}
            </div>
        </section>
    )
}

export default Toptalents