import React from 'react';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { termsAndCondition } from '../data/data';
import { Layout } from '../components/Layout';

function TermsAndCondition() {
    const navigate = useNavigate(0);
    const handlePrevStep = () => navigate(-1);

    return (
        <Layout isAuthRequired={false}>
            <div className="md:pr-24">
                <div className="flex pb-8 cursor-pointer items-center gap-2" onClick={handlePrevStep}>
                    <ArrowLeft />
                    <span>Back</span>
                </div>

                <div className="space-x-1">
                    <span className="text-gray300 text-base">Settings</span>
                    <span className="text-gray300 text-base">/</span>
                    <span className="text-black font-bold">Terms and Conditions</span>
                </div>

                <div className="mt-8">
                    <h2 className="font-bold mb-2">Legal</h2>
                    <p className="text-black100">{termsAndCondition.legal}</p>
                </div>
                <div className="mt-8 ">
                    <h2 className="font-bold mb-2">Terms of Service</h2>
                    <p>{termsAndCondition.termsOfService}</p>
                </div>
            </div>
        </Layout>
    );
}

export default TermsAndCondition;
