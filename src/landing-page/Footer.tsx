import React from 'react'
import Button from '../components/Button';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div id='footer-section' className='px-0 lg:px-[10%] w-full'>
            <div className='section flex flex-col gap-12'>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-0'>
                    <div className='col-span-1 xl:col-span-6 h-full flex flex-col justify-between gap-8'>
                        <div>
                            <img src="/images/logo.png" alt="Askitect" />
                        </div>
                        <div>
                            <ul className='flex gap-6 list-none'>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-1 xl:col-start-8 xl:col-span-5 flex flex-col gap-8'>
                        <div>
                            <span className='title-3'>Join our mailing list</span>
                            <p className='text-[var(--secondary-text-color)]'>Subscribe to get the latest news and updates right to your inbox.</p>
                        </div>
                        <div className='flex gap-4'>
                            <input
                                className='flex-1 p-2 text-gray-600 border-2 border-gray-600 outline-none rounded-lg bg-[var(--primary-color)]'
                                placeholder='Email Address'
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center text-[var(--secondary-text-color)] border-t-2 border-gray-600 py-4 mt-4 flex-wrap gap-2'>
                    <div>
                        <span>© 2024 Askitect. All rights reserved.</span>
                    </div>
                    <div className='flex gap-4 text-[var(--secondary-text-color)]'>
                        <FaFacebookF className='social-icon'/>
                        <FaLinkedinIn className='social-icon'/>
                        <FaInstagram className='social-icon'/>
                        <FaYoutube className='social-icon'/>
                    </div>
                    <div>
                        <span>Made by Magneto IT Solutions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
