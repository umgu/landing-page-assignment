import React from 'react'
import Header from './Header';
import Button from '../components/Button';
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
    return (
        <div id="banner"
            className='w-full h-[75vh] xl:h-[90vh]'
        >
            <div className='absolute top-0 left-0 w-full px-4 lg:px-16'>
                <Header />
            </div>
            <div className='flex flex-col justify-center items-center gap-8 p-4'>
                <p className='text-center text-4xl lg:text-6xl font-semibold'>Vivamus pretium elit,<br />venenatis quam scelerisque non.</p>
                <p>Fusce egestas fermentum elit ac sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button>Let's start<FiArrowUpRight /></Button>
            </div>
        </div>
    )
}

export default Banner;
