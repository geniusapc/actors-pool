import React from 'react'
import { ReactComponent as WarningIcon } from "../../assets/icons/warning.svg"

function AlertWithDescription({ title, description, isVisible = false }) {
    return (
        <div
            className={`flex w-full justify-center mb-8 ${!isVisible && "hidden"}`}
        >
            <div className='bg-[#fef2f2] w-full p-8 flex align-top  justify-start gap-4'>
                <div >
                    <WarningIcon width="24" className="text-[#991B1B]" />
                </div>
                <div>
                    <div className='text-[#991B1B] mb-4'>{title}</div>
                    <div className='text-[#B91C1C]'>{description}</div>
                </div>
            </div>




        </div>
    )
}

export default AlertWithDescription

