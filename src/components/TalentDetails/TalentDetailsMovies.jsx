import React from 'react';
import ProfileWorkCard from '../Profile/Cards/ProfileWorkCard';

function TalentDetailsMovies({ talent }) {
    return (
        <div className="grid grid-cols-3 gap-2 justify-start content-center">
            {!talent?.movies?.length ? (
                <>No movies</>
            ) : (
                talent?.movies?.map((movie) => (
                    <ProfileWorkCard key={movie.title} title={movie.title} year={movie.year} />
                ))
            )}
        </div>
    );
}

export default TalentDetailsMovies;
