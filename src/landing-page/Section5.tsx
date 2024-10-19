import React from 'react'
import Button from '../components/Button';
import { section2Data, serviceSectionData } from './mock-data';

const Section5 = () => {
    return (
        <div id="section5-section" className="section">
            <div className='w-100 flex flex-col text-center justify-center items-center py-16 px-16 bg-[var(--color-1)] rounded-lg'>
                <span className='title-3'>Aliquam quis dui nec justo elementum posuere.</span>
                <span className='text-[var(--secondary-text-color)]'>Vestibulum efficitur, magna eget egestas fringilla, dui nibh cursus velit, id tempus lorem est ut dui.</span>
                <div className='mt-4'>
                    <Button>Inquire Now</Button>
                </div>

            </div>
        </div>
    )
}

export default Section5;
