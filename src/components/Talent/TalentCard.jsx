import React from 'react'
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom'
import { SERVER_BASEURL } from '../../config/keys';
import { addTalentToProjectHandler } from '../../features/projects/projects';
import { useDispatch } from 'react-redux';


const TalentCard = ({ talent }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className=" h-[292px] w-full md:w-[292px] relative  bg-black mb-12 pb-8">
            <div className=" w-full h-full" onClick={() => navigate(`/talent/${talent.username}`)}>
                <img
                    className="object-contain w-full h-full"
                    src={`${SERVER_BASEURL}${talent.photo}`}
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 left-0  pl-4 pb-4 text-left text-[#ffffff] bg-black w-full">
                <p><span className='mr-2'> {talent.firstname}</span> {talent.lastname}</p>
                <p>
                    <span className="capitalize mr-2">{talent.profession}</span>
                    <span className="inline-block w-2 h-2 mr-2 ml-2 bg-white rounded-full"></span>
                    <span className='mr-2'>Active since</span>
                    <Moment format="YYYY">{talent.activeSince}</Moment>
                </p>
            </div>
            <div className='absolute top-2 right-2' onClick={() => dispatch(addTalentToProjectHandler(talent))}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.8" />
                    <path d="M9.33333 6.33331C9.33333 5.78103 9.78105 5.33331 10.3333 5.33331H13.6667C14.219 5.33331 14.6667 5.78103 14.6667 6.33331V6.99998C14.6667 7.55226 14.219 7.99998 13.6667 7.99998H10.3333C9.78105 7.99998 9.33333 7.55226 9.33333 6.99998V6.33331Z" fill="#6F55DA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33333 6.69106C7.49473 6.73811 6.96532 6.87174 6.58579 7.25127C6 7.83706 6 8.77987 6 10.6655V14.6655C6 16.5511 6 17.4939 6.58579 18.0797C7.17157 18.6655 8.11438 18.6655 10 18.6655H14C15.8856 18.6655 16.8284 18.6655 17.4142 18.0797C18 17.4939 18 16.5511 18 14.6655V10.6655C18 8.77987 18 7.83706 17.4142 7.25127C17.0347 6.87174 16.5053 6.73811 15.6667 6.69106V6.99998C15.6667 8.10455 14.7712 8.99998 13.6667 8.99998H10.3333C9.22876 8.99998 8.33333 8.10455 8.33333 6.99998V6.69106ZM8.16667 11C8.16667 10.7238 8.39052 10.5 8.66667 10.5H15.3333C15.6095 10.5 15.8333 10.7238 15.8333 11C15.8333 11.2761 15.6095 11.5 15.3333 11.5H8.66667C8.39052 11.5 8.16667 11.2761 8.16667 11ZM8.83333 13.3333C8.83333 13.0572 9.05719 12.8333 9.33333 12.8333H14.6667C14.9428 12.8333 15.1667 13.0572 15.1667 13.3333C15.1667 13.6095 14.9428 13.8333 14.6667 13.8333H9.33333C9.05719 13.8333 8.83333 13.6095 8.83333 13.3333ZM9.5 15.6666C9.5 15.3905 9.72386 15.1666 10 15.1666H14C14.2761 15.1666 14.5 15.3905 14.5 15.6666C14.5 15.9428 14.2761 16.1666 14 16.1666H10C9.72386 16.1666 9.5 15.9428 9.5 15.6666Z" fill="#6F55DA" />
                </svg>

            </div>
        </div>

    );
};

export default TalentCard