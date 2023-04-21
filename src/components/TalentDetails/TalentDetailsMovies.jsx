import React from 'react'
import ProfileWorkCard from '../Cards/ProfileWorkCard'

function TalentDetailsMovies({ talent }) {
    return (
        <div className='grid grid-cols-3 gap-2 justify-start content-center'>
            {talent.movies.map((movie) => <ProfileWorkCard
                key={movie.title}
                title={movie.title}
                year={movie.date}
                icon='/icons/clapperboard-play.svg' />

            )}
        </div>
    )
}

export default TalentDetailsMovies