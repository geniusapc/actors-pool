import React from 'react'

function TalentDetailsAbout({ talent }) {
    return (
        <p className='text-sm px-4 min-h-[220px]'>{talent?.about}</p>
    )
}

export default TalentDetailsAbout