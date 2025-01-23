'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  // Variants for container (staggering children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.3,
      },
    },
  };

  // Variants for each child element
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };
  return (
    <motion.section
      className="flex flex-row items-center gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-row items-center gap-10 w-[150px] text-[12px] text-secondary"
        variants={itemVariants}
      >
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
            className="cursor-pointer hover:translate-x-[-2px] hover:text-primary transition-transform duration-200"
          >
            spp11@iitbbs.ac.in
          </a>
        )}
      </motion.div>
      <motion.div
        className="w-[90px] h-[1px] bg-secondary"
        variants={itemVariants}
      />
    </motion.section>
  );
}
