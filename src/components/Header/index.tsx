'use client';
import { motion } from 'framer-motion';
import { HEADER_TABS, RESUME_LINK } from '@/constants';
import BrandLogo from '../BrandLogo';
import PrimaryCTA from '../PrimaryCTA';

export default function Header() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
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

  const handleCTAClick = () => {
    window.open(RESUME_LINK, '_blank');
  };
  return (
    <motion.header
      className="absolute top-0 left-0 flex flex-row w-full h-[100px] items-center justify-between px-[50px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={logoVariants}>
        <BrandLogo />
      </motion.div>
      <motion.nav
        className="flex flex-row items-center space-x-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <nav className="flex flex-row items-center space-x-6">
          {HEADER_TABS.map((header, idx) => {
            return (
              <motion.div
                key={header}
                className="text-[13px] cursor-pointer"
                variants={itemVariants}
              >
                <span className="text-primary">0{idx + 1}. </span>
                <a className="text-boldtext">{header}</a>
              </motion.div>
            );
          })}
          <motion.div variants={itemVariants}>
            <PrimaryCTA onClick={handleCTAClick} />
          </motion.div>
        </nav>
      </motion.nav>
    </motion.header>
  );
}
