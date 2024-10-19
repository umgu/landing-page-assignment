import React from 'react'
import Button from '../components/Button';
import { serviceSectionData } from './mock-data';
import { FiArrowUpRight } from 'react-icons/fi';

const Services = () => {
    return (
        <div id="services-section" className="section flex flex-col gap-8">
            <div>
                <span className='title-4'>Products & Solutions</span>
            </div>
            <div>
                <span className='title-1'>Askitect AI</span>
                <p className='text-[var(--secondary-text-color)]'>Aenean tristique, tellus id posuere tincidunt, enim tortor scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam tincidunt nisl sed quam tempor.</p>
                <div className='mt-4'>
                    <Button>Try Now<FiArrowUpRight /></Button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 justify-between items-center'>
                {serviceSectionData.subSection1.map(({ title, description }, index) => {
                    return (
                        <div className='flex flex-col gap-3 flex-1' key={index}>
                            <span className='title-4'>{title}</span>
                            <p className='text-[var(--secondary-text-color)]'>{description}</p>
                        </div>
                    )
                })}
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                <span className='title-3'>You may need our services if you want to:</span>
                <div className='flex gap-8 flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center'>
                    {
                        serviceSectionData.subSection2.map(({ title, link }, index) => {
                            return (
                                <div className='bg-[var(--secondary-color)] p-4 rounded-lg w-full' key={index}>
                                    <p className='title-4'>{title}</p>
                                    <span className='text-[var(--tertiary-color)] cursor-pointer font-medium flex gap-1 items-center'>
                                        Learn More<FiArrowUpRight className='text-[var(--secondary-text-color)]'/>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;
