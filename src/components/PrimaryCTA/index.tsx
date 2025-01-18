'use client';
import { useState } from 'react';

type PrimaryCTAProps = {
    text?: string;
    btnStyle?: string;
    bgStyle?: string;
    onClick?: () => void;
};

export default function PrimaryCTA({
    text = 'Resume',
    onClick = () => {},
    bgStyle = 'w-[88px] h-[40px] bg-primary rounded-lg',
    btnStyle = 'flex flex-row items-center justify-center text-[13px] text-primary bg-primarybg border-primary border-[1px] rounded-lg',
}: PrimaryCTAProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 500);
        if (onClick) {
            onClick();
        }
    };
    return (
        <button className={`relative ${bgStyle}`}>
            <div
                onClick={handleClick}
                className={`absolute top-0 left-0 z-10 w-full h-full ${btnStyle} transform transition-transform duration-200 ${
                    isClicked ? 'translate-x-0 translate-y-0' : 'hover:translate-x-[-2px] hover:translate-y-[-2px]'
                }`}
            >
                {text}
            </div>
        </button>
    );
}
