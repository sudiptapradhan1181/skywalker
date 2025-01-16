import FixedInfo from '@/components/FixedInfo';
import Header from '@/components/Header';
import { SocialMediaIcon } from '@/types/types';

const SOCIAL_ICONS: SocialMediaIcon[] = [
    {
        url: '/icons/github.svg',
        hoverUrl: '/icons/githubHover.svg',
        alt: 'GitHub Icon',
        redirectUrl: 'https://github.com/sudiptapradhan1181',
    },
    {
        url: '/icons/linkedin.svg',
        hoverUrl: '/icons/linkedinHover.svg',
        alt: 'LinkedIn Icon',
        redirectUrl: 'https://www.linkedin.com/in/sudiptapradhan1181/',
    },
    {
        url: '/icons/hashnode.svg',
        hoverUrl: '/icons/hashnodeHover.svg',
        alt: 'Hashnode Icon',
        redirectUrl: 'https://sudo-coder.hashnode.dev/?source=top_nav_blog_home',
    },
];

export default function Home() {
    return (
        <div className="relative font-[family-name:var(--font-fira-code)]">
            <Header />
            <div className="h-screen w-screen px-[200px] flex flex-col justify-center">
                <span className="text-[#64FFDA] text-[16px] mx-2 my-4">Hi, my name is</span>
                <div className="font-[family-name:var(--font-inter)] flex flex-col">
                    <h1 className="text-[#CCD6F6] text-[70px] leading-[80px] font-bold ">Sudipta Pradhan.</h1>
                    <h2 className="text-[#8892B0] text-[70px] leading-[72px] font-bold">I build things for the web.</h2>
                    <p className="text-[#8892B0] text-[16px] max-w-[540px] mt-5">
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                        Currently, I’m focused on building accessible, human-centered products at{' '}
                        <a className="text-[#64FFDA] cursor-pointer">Saathi</a>.
                    </p>
                </div>
            </div>
            <div className="fixed rotate-90 bottom-[135px] left-0">
                <FixedInfo icons={SOCIAL_ICONS} />
            </div>
            <div className="fixed rotate-90 bottom-[135px] right-0">
                <FixedInfo />
            </div>
        </div>
    );
}
