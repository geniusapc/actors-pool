import React from 'react';
import TailBrazersCard from './TrailBlazersCard';
import { useTrailBlazzer } from '../../hooks/useTalentData';
import { Carousel } from 'flowbite-react';
import TrailBlazzersCarouselContent from './TrailBlazersCarousel';

function TrailBlazers() {
    const { data } = useTrailBlazzer();
    const blazzers = data?.data?.data;
    const sectionOne = blazzers?.slice(0, 3);
    const sectionTwo = blazzers?.slice(3, 6);

    return (
        <section className="bg-default-bg-img bg-cover w-full flex flex-col items-center text-center text-white pb-32 ">
            <div className="absolute h-full w-full bg-gradient-to-r from-[#050504] to-[#0b1717] -z-10 "></div>
            <div className='container mx-auto px-5'>

                <div className="  w-full py-10 md:py-16">
                    <h2 className="text-4xl mb-4">Trail Blazers</h2>
                    <p>Young upcoming stars making waves in the entertainment industry</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-around  mt-20 w-full">
                        {sectionOne?.map((talent) => (
                            <TailBrazersCard key={talent._id} talent={talent} />
                        ))}
                    </div>
                </div>

                <Carousel className="flex flex-col  md:flex-row w-full  bg-white mb-12 rounded">
                    {sectionTwo?.map((talent) => (
                        <TrailBlazzersCarouselContent key={talent?._id} talent={talent} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default TrailBlazers;
