import React from 'react';
import ProfileWorkCard from '../../Profile/Cards/ProfileWorkCard';

function TalentDetailsMovies({ talent }) {
    const noMovies = !talent?.movies?.length
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-start ">
            {noMovies ? (
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
