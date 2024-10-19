import React from 'react'
import Button from '../components/Button';
import { faqSectionData, section2Data, serviceSectionData } from './mock-data';
import Accordion from '../components/Accordion';

const FAQ = () => {
    const [selectedAccordion, setSelectedAccordion] = React.useState(0);

    return (
        <div id="faq-section" className="section flex flex-col gap-8">
            <div>
                <span className='title-3'>Frequently asked questions:</span>
            </div>
            <div className='flex flex-col gap-4'>
                {faqSectionData.questions.map(({ qs, ans }, index) => {
                    return (
                        <Accordion
                            key={index}
                            head={qs}
                            onClick={setSelectedAccordion}
                            isOpened={selectedAccordion === index}
                            id={index}
                        >
                            {ans}
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}

export default FAQ;
