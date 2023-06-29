import React from 'react'
import InputWithButton from '../Input/InputWithButton'

function NewsletterSubscription() {
    return (
        <div className='flex flex-col items-center bg-white w-full md:w-3/5  py-[56px]  px-2 m content-center rounded-3xl'>
            <div className='w-full   mx-auto flex flex-col items-center text-center  text-black'>
                <h3 className='text-base md:text-5xl pb-3 font-bold'>Subscribe to our Newsletter</h3>
                <p className='mx-0 md:mx-12 mb-10 mt-6'>Be the first to know when we release new features and information about your favourite celebrities.</p>
                <InputWithButton style={{ form: "md:px-[60px]" }} />
            </div>

        </div>
    )
}

export default NewsletterSubscription