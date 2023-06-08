import React from 'react';
import { SERVER_BASEURL } from '../../config/keys';

function TalentDetailsGallery({ talent }) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {talent?.gallery.map((e) => (
                <div
                    className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'
                    key={e}

                >
                    <img
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        src={`${SERVER_BASEURL}${e?.photo}`}
                        alt={talent?.name}
                    />

                </div>

            ))}
        </div>
    );
}

export default TalentDetailsGallery;
