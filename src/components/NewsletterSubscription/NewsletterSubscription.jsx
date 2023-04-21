import React from 'react'
import InputWithButton from '../Input/InputWithButton'

function NewsletterSubscription() {
    return (
        <div className='flex flex-col items-center text-black bg-white w-full md:w-3/5 my-52  py-[56px]  px-1/3 mx-auto rounded-3xl'>
            <div className='w-full md:w-3/5 mx-auto  flex flex-col items-center text-center'>
                <h3 className='text-3xl md:text-5xl pb-3'>Subscribe to our Newsletter</h3>
                <p className='mx-12 mb-10 mt-6'>Be the first to know when we release new features and information about your favourite celebrities.</p>
                <InputWithButton style={{ form: "px-[60px]" }} />
            </div>

        </div>
    )
}

export default NewsletterSubscription