import React from 'react'

function TalentDetailsGallery({ talent }) {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {talent.gallery.map((e) => <img src={e} key={e} alt={talent.name} />)}
        </div>
    )
}

export default TalentDetailsGallery