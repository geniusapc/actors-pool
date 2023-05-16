import React from 'react'
import { SERVER_BASEURL } from '../../config/keys'

function TalentDetailsGallery({ talent }) {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {talent.gallery.map((e) => <img className="h-60 w-60" src={`${SERVER_BASEURL}${e?.photo}`} key={e} alt={talent.name} />)}
        </div>
    )
}

export default TalentDetailsGallery