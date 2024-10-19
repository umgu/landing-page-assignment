import React from 'react'
import Button from '../components/Button';
import { section2Data, serviceSectionData } from './mock-data';

const Section2 = () => {
    return (
        <div id="section2-section" className="section grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-[10%]">
            <div className='h-100 flex flex-col justify-center items-center gap-2 text-center xl:text-start'>
                <span className='title-2'>{section2Data.subSection1.title}</span>
                <p className='text-[var(--secondary-text-color)]'>{section2Data.subSection1.description}</p>
            </div>
            <div className='flex justify-center items-center'>
                <img src={section2Data.subsection2.image} alt='image...'/>
            </div>
        </div>
    )
}

export default Section2;
