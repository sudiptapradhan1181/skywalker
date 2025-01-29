'use client';
import { motion } from 'framer-motion';
import { HEADER_TABS, RESUME_LINK } from '@/constants';
import BrandLogo from '../BrandLogo';
import PrimaryCTA from '../PrimaryCTA';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type HeaderProps = {
  setIsMwebMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export default function Header({ setIsMwebMenuOpen }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleCTAClick = () => {
    window.open(RESUME_LINK, '_blank');
  };

  const handleToggleMenu = () => {
    setIsMwebMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 flex flex-row w-full h-[80px] items-center justify-between px-[24px] md:px-[50px] bg-primarybg/80 z-50 backdrop-blur-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : { y: '-100%' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <motion.div variants={logoVariants}>
        <BrandLogo />
      </motion.div>
      <motion.nav
        className="hidden md:flex flex-row items-center space-x-6"
        initial="hidden"
        animate={isVisible ? 'visible' : { y: '-100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        variants={containerVariants}
      >
        <nav className="flex flex-row items-center space-x-6">
          {HEADER_TABS.map((header, idx) => {
            return (
              <motion.a
                key={header.title}
                className="text-[13px] cursor-pointer flex flex-row items-center space-x-2"
                variants={itemVariants}
                href={header.href}
              >
                <span className="text-primary">0{idx + 1}. </span>
                <div className="text-boldtext">{header.title}</div>
              </motion.a>
            );
          })}
          <motion.div variants={itemVariants}>
            <PrimaryCTA onClick={handleCTAClick} />
          </motion.div>
        </nav>
      </motion.nav>
      <motion.nav className="md:hidden" variants={logoVariants}>
        <img
          src="/icons/hammenu.svg"
          alt="Hamburger Menu"
          className="cursor-pointer w-[39px] h-[45px]"
          onClick={handleToggleMenu}
        />
      </motion.nav>
    </motion.header>
  );
}
