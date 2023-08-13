import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from "../../assets/icons/logo.svg"
import { openSignUpModal, openSignInModal } from '../../features/auth/auth'

const socialMedia = {
    tiktok: "https://tiktok.com",
    twitter: "https://twitter.com",
    snachat: "https://snapchat.com",
    instagram: "https://instagram.com"
}

function Footer() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch(0)
    return (
        <div className=''>
            <div className='container mx-auto px-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-2/5'>
                    <p className='text-xl pb-4 md:pb-8 flex gap-4'>    <Logo /> Actor’s Pool</p>
                    <p>© Actors Pool LLC 2022</p>
                </div>
                <div className='flex flex-col gap-8 mt-10 md:mt-0 md:flex-row justify-between w-3/5'>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Product</h3>
                        <div className='flex flex-col  gap-6'>
                            <Link to="/about">About</Link>
                            <button className="text-left" onClick={() => dispatch(openSignUpModal())}>Sign Up</button>
                            {!isAuth && <button className="text-left" onClick={() => dispatch(openSignInModal())}>Login</button>}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Legal</h3>
                        <div className='flex flex-col  gap-6'>
                            <Link to={"/terms-and-conditions"}>Privacy Policy</Link>
                            <Link to={"/terms-and-conditions"}>Terms of Service</Link>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Help</h3>
                        <div className='flex flex-col  gap-6'>
                            <Link to={"/faq"}>FAQ</Link>
                            <Link to={"/contact-us"}>Contact Us</Link>

                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl pb-4 md:pb-8'>Follow us</h3>
                        <div className='flex flex-col gap-6'>
                            <a href={socialMedia.tiktok}>TikTok</a>
                            <a href={socialMedia.twitter}>Twitter</a>
                            <a href={socialMedia.snachat}>Snapchat</a>
                            <a href={socialMedia.instagram}>Instagram</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer