import React, { ReactNode } from 'react';
import { MdOutlineArrowDownward } from "react-icons/md";

interface IAccordionProps {
    isOpened: boolean;
    onClick: (id: number) => void;
    head: ReactNode;
    children: ReactNode;
    id: number;
}

const Accordion = (props: IAccordionProps) => {
    const { isOpened, onClick, head, children, id } = props;
    return (
        <div className='w-full'>
            <div
                onClick={() => onClick(id)}
                className='border-b-2 border-gray-600 py-4 cursor-pointer flex justify-between items-center gap-8'
            >
                {head}
                <div className={`p-1 rounded-full ${isOpened ? "rotate-180 text-[var(--color-1)] bg-[var(--secondary-text-color)]" : "text-[var(--secondary-text-color)] bg-[var(--color-1)]"}`}>
                    <span>
                        <MdOutlineArrowDownward />
                    </span>
                </div>
            </div>
            {isOpened && <div className='py-4 text-[var(--secondary-text-color)]'>
                {children}
            </div>}
        </div>
    )
}

export default Accordion;
