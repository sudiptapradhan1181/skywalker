'use client';
import { useState } from 'react';
import { SocialMediaIcon } from '@/types/types';

type FixedInfoProps = {
    icons?: SocialMediaIcon[];
};

function HoverIcon({ url, alt, hoverUrl, redirectUrl }: SocialMediaIcon) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="h-5 w-5 rotate-[-90deg] cursor-pointer hover:translate-x-[-2px] transition-transform duration-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(redirectUrl, '_blank')}
        >
            <img key={url} src={isHovered ? hoverUrl : url} alt={alt} />
        </div>
    );
}

export default function FixedInfo({ icons = [] }: FixedInfoProps) {
    return (
        <section className="flex flex-row items-center gap-10">
            <div className="flex flex-row items-center gap-10 w-[150px] text-[12px] text-[#A8B2D1]">
                {icons?.length > 0 ? (
                    icons?.map((icon: SocialMediaIcon) => {
                        return (
                            <HoverIcon
                                key={icon?.url}
                                url={icon?.url}
                                alt={icon?.alt}
                                hoverUrl={icon?.hoverUrl}
                                redirectUrl={icon?.redirectUrl}
                            />
                        );
                    })
                ) : (
                    <a
                        href="mailto:spp11@iitbbs.ac.in"
                        className="cursor-pointer hover:translate-x-[-2px] hover:text-[#64FFDA] transition-transform duration-200"
                    >
                        spp11@iitbbs.ac.in
                    </a>
                )}
            </div>
            <div className="w-[90px] h-[1px] bg-[#A8B2D1]" />
        </section>
    );
}
