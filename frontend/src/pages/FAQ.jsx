import React from 'react';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { faq } from '../data/data';
import { Layout } from '../components/Layout';
import { ReactComponent as DropDownIcon } from '../assets/icons/drop-down-arrow.svg';

function FAQ() {
    const navigate = useNavigate(0);
    const handlePrevStep = () => navigate('/settings');

    return (
        <Layout>
            <div className="md:pr-24">
                <div className="flex pb-8 cursor-pointer items-center gap-2" onClick={handlePrevStep}>
                    <ArrowLeft />
                    <span>Back</span>
                </div>

                <div className="space-x-1 mb-10">
                    <span className="text-gray300 text-base">Settings</span>
                    <span className="text-gray300 text-base">/</span>
                    <span className="text-black font-bold">Terms and Conditions</span>
                </div>

                <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                >
                    {faq?.map((e, index) => (
                        <>
                            <h2 id={`accordion-flush-heading-${index}`}>
                                <button
                                    type="button"
                                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                    data-accordion-target={`#accordion-flush-body-${index}`}
                                    aria-expanded="true"
                                    aria-controls={`accordion-flush-body-${index}`}
                                >
                                    <span>{e.question}?</span>
                                    <DropDownIcon data-accordion-icon />
                                </button>
                            </h2>
                            <div
                                id={`accordion-flush-body-${index}`}
                                class="hidden"
                                aria-labelledby={`accordion-flush-heading-${index}`}
                            >
                                <div class="py-5 border-b border-gray-200 dark:border-gray-700">{e.answer}</div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default FAQ;
