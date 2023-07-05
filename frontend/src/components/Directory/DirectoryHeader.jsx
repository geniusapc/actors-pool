import { useDispatch } from 'react-redux';
import { TEMP_PROJ_MODAL, openModal } from '../../features/projects/projects';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import SelectInput from '../Input/Select';
import { GENDER } from '../../data/gender';
import { LANGUAGES } from '../../data/languages';
import { useEffect } from 'react';

const DirectoryHeader = ({ hideProjectButton = false, setFilter }) => {
    const dispatch = useDispatch();
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const [data, setData] = useState({});

    const handleToggle = () => {
        setIsToggleOpen((e) => !e);
    };

    const handleOnChange = (e) => {
        const { name, value } = e?.target;
        setData((e) => ({ ...e, [name]: value }));
        if (name === 'ageLowerLimit') setData((e) => ({ ...e, ageUpperLimit: undefined }));
    };

    const handleClearFilter = () => {
        setData({});
    };

    useEffect(() => {
        const filter = {};
        if (data.ageLowerLimit) filter['q.age.lte'] = data.ageLowerLimit;
        if (data.ageUpperLimit) filter['q.age.gte'] = data.ageUpperLimit;
        if (data.gender) filter['q.gender'] = data.gender;
        if (data.language) filter['q.language'] = data.language;
        if (data.activeSince) filter['q.activeSince'] = data.activeSince;
        setFilter(filter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <>
            <div className="flex  flex-col md:flex-row justify-between mb-8 ">
                <h1 className="text-[#040503] text-3xl font-bold mb-12 md:mb-0 ">Talents Directory</h1>
                <div className="flex gap-2 ml-auto ">
                    {!hideProjectButton && (
                        <Button
                            variant="primary"
                            onClick={() => dispatch(openModal(TEMP_PROJ_MODAL))}
                            className="text-black"
                        >
                            View Project
                        </Button>
                    )}
                    <Button
                        variant={`${isToggleOpen ? 'primary' : 'outlined'}`}
                        className="text-black cursor-pointer sm:text-sm "
                        onClick={handleToggle}
                    >
                        <FilterIcon />
                        Filter
                    </Button>

                    {Object.keys(data).length !== 0 && (
                        <Button variant="outlined" onClick={handleClearFilter}>
                            Reset Filter
                        </Button>
                    )}
                </div>
            </div>
            {isToggleOpen && (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-y-4 md:space-y-0 md:gap-6">
                        <SelectInput
                            id="gender"
                            name="gender"
                            value={data?.gender}
                            onChange={handleOnChange}
                            data={GENDER}
                            label="Gender"
                            defaultOptionLabel="Choose gender"
                        />

                        <Input
                            id="activeSince"
                            name="activeSince"
                            type="date"
                            value={data?.activeSince}
                            onChange={handleOnChange}
                            label="Active Since"
                        />
                        <SelectInput
                            id="language"
                            name="language"
                            value={data?.language}
                            onChange={handleOnChange}
                            data={LANGUAGES}
                            label="Language"
                            defaultOptionLabel="Choose language"
                        />
                        <div className="flex  items-end gap-x-2">
                            <SelectInput
                                id="ageLowerLimit"
                                name="ageLowerLimit"
                                value={data?.ageLowerLimit}
                                onChange={handleOnChange}
                                data={Array.from({ length: 100 }, (_, i) => ({
                                    value: i + 1,
                                    label: `${i + 1} yrs`,
                                }))}
                                label="Age"
                                defaultOptionLabel="Min"
                            />

                            <SelectInput
                                id="ageUpperLimit"
                                name="ageUpperLimit"
                                value={data?.ageUpperLimit}
                                onChange={handleOnChange}
                                data={Array.from({ length: 100 }, (_, i) => ({
                                    value: (Number(data?.ageLowerLimit) || 0) + i + 1,
                                    label: `${Number(data?.ageLowerLimit || 0) + i + 1} yrs`,
                                }))}
                                defaultOptionLabel="Max"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default DirectoryHeader;
