import React from 'react'
import Modal from '../Modal/Modal'
import { tNc } from '../../data/data'
import Button from '../Button/Button'


function TnC() {
    const onCloseModelHandler = () => {

    }
    return (
        <Modal isOpen={false} onClose={onCloseModelHandler} >
            <h2 className='font-bold text-3xl'>Terms and Conditions</h2>
            <div className='overflow-y-scroll h-96'>
                <h3 className='text-sm text-black font-bold mt-8 mb-4'>Legal</h3>
                <article>
                    {tNc.legal}
                </article>
                <h3 className='text-sm text-black font-bold mt-8 mb-4'> Terms of Service</h3>
                <article>
                    {tNc.TermsOfService}
                </article>

            </div>

            <div className='mt-12 flex justify-center'>
                <Button variant='primary'>I Understand and Agree</Button>
            </div>



        </Modal >
    )
}

export default TnC