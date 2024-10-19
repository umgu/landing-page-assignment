import React from 'react'

const Button = (props: any) => {
    const { children, onClick, variant = "primary" } = props;

    const getStyle = (variant: string) => {
        switch (variant) {
            case "secondary":
                return "border-[var(--secondary-text-color)] text-[var(--secondary-text-color)]";
        }
        return "bg-[var(--tertiary-color)] border-[var(--tertiary-color)]";
    }

    return (
        <button
            className={`rounded-3xl border-2 px-6 py-2 text-lg ${getStyle(variant)}`}
            onClick={onClick}
        >
            <div className='flex gap-2 items-center justify-center'>
                {children}
            </div>
        </button>
    )
}

export default Button;
