import React from 'react'
import { tailBrazer } from '../../mockData/user'
import TailBrazersCard from './TailBlazersCard'

function TailBlazers() {
    const trail = tailBrazer[3]
    return (
        <section className='w-full flex flex-col items-center text-center text-white bg-gradient-to-r  from-[#050504] to-[#0b1717]   pb-32'>
            <div className='container mx-auto py-10 md:py-16'>
                <h2 className='text-4xl mb-4'>Trail Blazers</h2>
                <p>Young upcoming stars making waves in the entertainment industry</p>

                <div className='flex flex-row flex-wrap justify-around  mt-20 w-full'>
                    {tailBrazer.slice(0, 3).map((user) => <TailBrazersCard user={user} />)}
                </div>
            </div>

            <div className='container flex flex-col md:flex-row w-full  bg-white mb-12'>
                <div className='w-full md:w-1/3 items-left'>
                    <img className='w-full h-full ' src={trail.photo} alt="" />
                </div>

                <div className='w-ful md:w-2/3 bg-white text-black text-left p-4 md:p-12'>
                    <h3 className='text-[32px] text-[#040503] mt-3'>{trail.name}</h3>
                    <div className='mt-3'>
                        <span>{trail.profession}</span> <span className='dots'></span>
                        <span>{trail.age}</span> <span className='dots mr-4'></span>
                        <span>{trail.active}</span>
                    </div>
                    <h3 className='mt-8 mb-3 text-[#979797] text-[10px] md:text-[12px]'>About</h3>
                    <p className=' text-xs md:text-base'> {trail.about}</p>

                    <h3 className='mt-8 mb-3 text-[#979797] text-[10px] md:text-[12px]'>Movies</h3>
                    <p className='text-xs md:text-base'>{trail.movies?.map((e) => <span>{e}, </span>)}</p>


                </div>
            </div>
        </section>
    )
}

export default TailBlazers