'use client';
import { HEADER_TABS, RESUME_LINK } from '@/constants';
import BrandLogo from '../BrandLogo';
import PrimaryCTA from '../PrimaryCTA';

export default function Header() {
    const handleCTAClick = () => {
        window.open(RESUME_LINK, '_blank');
    };
    return (
        <header className="absolute top-0 left-0 flex flex-row w-full h-[100px] items-center justify-between px-[50px]">
            <BrandLogo />
            <nav className="flex flex-row items-center space-x-6">
                {HEADER_TABS.map((header, idx) => {
                    return (
                        <div key={header} className="text-[13px] cursor-pointer">
                            <span className="text-primary">0{idx + 1}. </span>
                            <a className="text-boldtext">{header}</a>
                        </div>
                    );
                })}
                <PrimaryCTA onClick={handleCTAClick} />
            </nav>
        </header>
    );
}
