import React from 'react';
import { ReactComponent as ArrrowNextIcon } from '../../assets/icons/angle-right.svg';
import { useNavigate } from 'react-router-dom';

function HelpCard() {
    const navigate = useNavigate()
    return (
        <div className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7 ">
            <h1 className="text-xl mb-6 font-semibold">Help</h1>
            <ul className="space-y-4 ">
                <li className="flex justify-between text-gray300 cursor-pointer">
                    Contact us <ArrrowNextIcon />
                </li>
                <li className="flex justify-between text-gray300 cursor-pointer" onClick={() => navigate("/settings/faq")}>
                    Frequently asked questions <ArrrowNextIcon />
                </li>
                <li className="flex justify-between text-gray300 cursor-pointer" onClick={() => navigate("/settings/terms-and-conditions")}>
                    Terms and conditions <ArrrowNextIcon />
                </li>
            </ul>
        </div>
    );
}

export default HelpCard;
