import BrandLogo from '../BrandLogo';
import PrimaryCTA from '../PrimaryCTA';

export default function Header() {
    const HEADERS = ['About', 'Experience', 'Projects', 'Contact'];
    return (
        <header className="absolute top-0 left-0 flex flex-row w-full h-[100px] items-center justify-between px-[50px]">
            <BrandLogo />
            <nav className="flex flex-row items-center space-x-6">
                {HEADERS.map((header, idx) => {
                    return (
                        <div key={header} className="text-[13px] cursor-pointer">
                            <span className="text-[#64FFDA]">0{idx + 1}. </span>
                            <a className="text-[#CCD6F6]">{header}</a>
                        </div>
                    );
                })}
                <PrimaryCTA />
            </nav>
        </header>
    );
}
