import Button from "../Button/Button";
import React from 'react'

function GetStartedGuide() {
    return (
        <section className='container mx-auto flex  flex-col md:flex-row  gap-4 px-4 py-12  '>
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
                <div className='text-2xl md:text-[48px] py-6'>List Yourself as a Talent</div>
                <p className='mb-8'>Are you an actor or entertainer looking to gain more visibility? You can list yourself on Actor’s pool as a talent and get noticed by creative directors and managers looking for talents for their next big project.</p>
                <Button variant="primary" className="w-[170px]">Get Started </Button>
            </div>
            <div className='w-full md:w-1/2' >
                <img className="w-full" src="images/getting_started.svg" alt="get started" />
            </div>
        </section>
    )
}

export default GetStartedGuide