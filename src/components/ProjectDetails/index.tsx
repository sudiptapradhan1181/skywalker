'use client';
import { useState } from 'react';

type ProjectDetailsProps = {
  title: string;
  desc: string;
  imgSrc: string;
  href: string;
  tags: string[];
  alignRight?: boolean;
};

export default function ProjectDetails({
  title,
  desc,
  imgSrc,
  href,
  tags,
  alignRight = false,
}: ProjectDetailsProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-full flex items-center relative mb-[40px] md:mb-[120px] ${
        alignRight ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div
        className="hidden md:block md:relative md:w-[65%] md:h-auto cursor-pointer"
        onClick={() => window.open(href, '_blank')}
      >
        <div className="bg-opacity-95 bg-primarybg w-full h-full absolute z-2 top-0 left-0 md:bg-primary md:bg-opacity-70  hover:bg-opacity-0" />
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className={`relative md:absolute top-0 text-left w-full h-full md:w-[50%] p-4 md:p-0 flex flex-col justify-center bg-transparent ${
          alignRight ? 'md:text-left md:left-0' : 'md:text-right md:right-0'
        }`}
      >
        <div className="block w-full h-full absolute z-[-1] top-0 left-0 md:hidden">
          <div className="bg-opacity-95 bg-primarybg w-full h-full absolute z-[-2]" />
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover rounded-md absolute z-[-3]"
          />
        </div>
        <span className="text-[13px] text-primary">Featured Project</span>
        <h3
          className="font-[family-name:var(--font-inter)] text-boldtext text-[28px] font-bold hover:text-primary cursor-pointer"
          onClick={() => window.open(href, '_blank')}
        >
          {title}
        </h3>
        <div className="font-[family-name:var(--font-inter)] text-[13px] text-medium font-medium w-full h-auto md:p-4 md:bg-secondarybg rounded-md my-4">
          {desc}
        </div>
        <div
          className={`flex flex-row items-center gap-4 text-medium text-[13px] ${
            alignRight ? 'md:justify-start' : 'md:justify-end'
          }`}
        >
          {tags?.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
        <div
          className={`w-full flex flex-row  mt-4 ${
            alignRight ? 'md:justify-start' : 'md:justify-end'
          }`}
        >
          <div
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(href, '_blank')}
          >
            <img
              className="w-full h-full"
              src={
                isHovered
                  ? '/icons/externalLinkHover.svg'
                  : '/icons/externalLink.svg'
              }
              alt="extLink"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
