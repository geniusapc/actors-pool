import { useRef, useState } from 'react';
import Button from '../Button/Button';
import InputWithButton from '../Input/InputWithButton';
import { ReactComponent as DropDownIcon } from '../../assets/icons/drop-down-arrow.svg';
import { useClickOutside } from '../../hooks/useEvents';
import {
    MakeTalentVisibleModal,
    ApproveTalentsModal,
    MakeTalentInvisibleModal,
    DeleteTalentsModal,
} from './modals';
import { STATUS } from './constants';

const MODALS = {
    approveTalent: 1,
    makeTalentVisible: 2,
    makeTalentInvisible: 3,
    deleteTalents: 4,
};
const AdminDirectoryHeader = ({ selectedTalent = [], setFilter = () => { }, refetchTalent }) => {
    const [toggle, setToggle] = useState(false);
    const [talentSearchValue, setTalentSearchValue] = useState(null);

    const [activeModal, setActiveModal] = useState(0);

    const debounceSearch = async (e) => {
        setTalentSearchValue(e.target.value);

        clearTimeout(debounceSearch.timer);
        debounceSearch.timer = setTimeout(async () => {
            setFilter(e.target.value);
        }, 1000);
    };

    const ref = useRef(null);
    const onClickOutsideHandler = () => {
        if (toggle) setToggle(false);
    };

    useClickOutside(ref, onClickOutsideHandler);

    const openModal = (modal) => {
        setActiveModal(modal);
    };
    const closeModal = () => {
        setActiveModal(0);
    };

    const seletctedTalentCount = selectedTalent?.length;
    const visibleTalentCount = selectedTalent?.filter((e) => e?.isProfileVisible)?.length;
    const inVisibleTalentCount = seletctedTalentCount - visibleTalentCount;
    const approvableTalentCount = selectedTalent?.filter(
        (e) => e?.status !== STATUS.APPROVED
    )?.length;

    return (
        <>
            <div className="flex  flex-col md:flex-row justify-between mb-8 ">
                <h1 className="text-[#040503] text-3xl font-bold mb-12 md:mb-0 ">Talents Directory</h1>
                <div className="flex gap-2 ml-auto ">
                    <div className="flex mr-14">
                        <InputWithButton
                            style={{ input: 'h-10' }}
                            placeHolder="search for talent"
                            value={talentSearchValue || ''}
                            hideBtn
                            onChange={debounceSearch}
                            onSubmit={(e) => e.preventDefault()}
                        />
                    </div>
                    <div className="flex relative" ref={ref} onClick={() => setToggle((e) => !e)}>
                        <Button variant="outlined" size="xsmall" className="h-10">
                            <div>Action </div>
                            <DropDownIcon />
                        </Button>

                        {toggle && (
                            <div className="absolute top-2 right-8  bg-white text-xs w-60 flex flex-col shadow-lg text-left gap-4 px-5 p-3 z-[10000]">
                                <button
                                    className="text-left disabled:opacity-25"
                                    onClick={() => openModal(MODALS.approveTalent)}
                                    disabled={!approvableTalentCount}
                                >
                                    Approve talent
                                </button>
                                <button
                                    className="text-left disabled:opacity-25"
                                    onClick={() => openModal(MODALS.makeTalentVisible)}
                                    disabled={!inVisibleTalentCount}
                                >
                                    Turn on visibility
                                </button>
                                <button
                                    className="text-left disabled:opacity-25"
                                    onClick={() => openModal(MODALS.makeTalentInvisible)}
                                    disabled={!visibleTalentCount}
                                >
                                    Turn off visibility
                                </button>
                                <button
                                    className="text-left disabled:opacity-25"
                                    onClick={() => openModal(MODALS.deleteTalents)}
                                    disabled={!seletctedTalentCount}
                                >
                                    Delete talents
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ApproveTalentsModal
                closeModal={closeModal}
                isModalOpen={activeModal === MODALS.approveTalent}
                talents={selectedTalent}
                refetchTalent={refetchTalent}
            />
            <MakeTalentVisibleModal
                closeModal={closeModal}
                isModalOpen={activeModal === MODALS.makeTalentVisible}
                talents={selectedTalent}
                refetchTalent={refetchTalent}
            />
            <MakeTalentInvisibleModal
                closeModal={closeModal}
                isModalOpen={activeModal === MODALS.makeTalentInvisible}
                talents={selectedTalent}
                refetchTalent={refetchTalent}
            />
            <DeleteTalentsModal
                closeModal={closeModal}
                isModalOpen={activeModal === MODALS.deleteTalents}
                talents={selectedTalent}
                refetchTalent={refetchTalent}
            />
        </>
    );
};
export default AdminDirectoryHeader;
