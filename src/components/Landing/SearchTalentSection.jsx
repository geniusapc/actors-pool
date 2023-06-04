import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchTalentSection() {
    const navigate = useNavigate();
    const [isSearchTalent, setIsSearchTalent] = useState(false);
    const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
    const [talent, setTalent] = useState();

    useEffect(() => {
        if (talent?.length >= 2) setIsSearchButtonDisabled(false);
        return () => {
            setIsSearchButtonDisabled(true);
        };
    }, [talent, setIsSearchButtonDisabled]);

    const listAsTalentHandler = () => {
        navigate(`/profile`);
    };

    const onChangeSearchTalentHandler = (e) => {
        setTalent(e.target.value);
    };
    const searchTalentHandler = () => {
        navigate(`/directory?q=${talent}`);
    };

    return (
        <div className="flex flex-col items-center text-center gap-4 md:w-3/5 mx-auto px-4 pt-14 md:pt-20 pb-24">
            <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#6F55DA] to-[#55C2DA] py-1">
                <span className="text-[#ffff]">The Largest Directory of</span>
                <span className="block">African Entertainers</span>
            </h1>
            <p className="py-1 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex  gap-8 mt-8">
                {!isSearchTalent ? (
                    <>
                        <Button onClick={listAsTalentHandler}>List Me as a Talent</Button>
                        <Button variant="primary" onClick={() => setIsSearchTalent(true)}>
                            Search Talents
                        </Button>
                    </>
                ) : (
                    <form onSubmit={searchTalentHandler} className='flex gap-8'>
                        <Input
                            className="w-[324px]"
                            variant="secondary"
                            placeholder="Search talent by name"
                            id="searchTalent"
                            onChange={onChangeSearchTalentHandler}
                            value={talent}
                        />
                        <Button
                            variant="primary"
                            type='submit'
                            disabled={isSearchButtonDisabled}
                        >
                            Search
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default SearchTalentSection;
