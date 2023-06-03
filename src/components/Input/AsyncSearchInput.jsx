import React from 'react';
import Input from './Input';
import { useState } from 'react';
import Loading from '../DataController/Loading';

// this is not in use right now It has been replaced with react-select

function AsyncSearchInput({ searchQuery, setSearchQuery, searchResult, isResultLoading }) {
    const [selectResult, setSelectResult] = useState(false);

    const onFocus = () => {
        setSelectResult(true);
    };

    return (


        <div className="relative">

            <Input
                id="talent"
                label="Add Talents to this project (Optional)"
                placeholder="Search for a talent"
                name="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={onFocus}
            />

            {selectResult && (
                <div className="absolute bg-white z-50 w-full min-h-[200px] top-20">

                    <ul className="flex flex-col gap-4">

                        {
                            isResultLoading ? <Loading /> :
                                searchResult?.map((result) =>
                                    <li key={result._id} id={result?._id} className="h-12 flex items-center">
                                        <img src="" className="h-12 w-12 mr-5" alt="" />
                                        <p className="text-black font-medium">
                                            <span>{result.firstname} {result.lastname}</span>
                                        </p>
                                    </li>

                                )
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AsyncSearchInput;
