import React from 'react'
// import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
// import TopTalentCard from '../components/TopTalent/TopTalentCard'
import { topTalent } from '../mockData/user'


function Directory() {
    return (
        <Layout showTalentHidden>
            <div className='flex  justify-between'>
                <h1 className='text-[#040503] text-3xl mb-8'>Talents Directory</h1>
                {/* <Button variant='outlined' className='text-black'>filter</Button> */}
            </div>

            <div className='grid grid-cols-4 gap-4 mb-4'>
                {topTalent.slice(0, 20).map((user) => <a href="/talent/details">
                    <div className='h-[292px] md:h-[292px]  object-contain  relative  bg-black mb-12 pb-12 style'>
                        <img className='h-[292px] md:h-[292px] ' src={user.photo} alt="" />
                        <div className='absolute bottom-0 left-0 text-left text-[#ffffff]'>
                            <p>{user.name}</p>
                            <span >{user.profession}</span> . <span>{user.active}</span>
                        </div>
                    </div></a>)}
            </div>


        </Layout>
    )
}

export default Directory