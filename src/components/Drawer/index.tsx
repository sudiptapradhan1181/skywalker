import { HEADER_TABS, RESUME_LINK } from '@/constants';
import { motion } from 'framer-motion';
import PrimaryCTA from '../PrimaryCTA';
import { RefObject } from 'react';

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  ref: RefObject<HTMLDivElement | null>;
};

const Drawer = ({ isOpen, toggleDrawer, ref }: DrawerProps) => {
  const handleCTAClick = () => {
    window.open(RESUME_LINK, '_blank');
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-[75vw] h-full bg-secondarybg text-white z-50 px-[24px]"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <div className="h-[100px] w-full flex flex-row items-center justify-end">
          <button
            onClick={toggleDrawer}
            className="w-[39px] h-[45px] cursor-pointer"
          >
            <img src="/icons/close.svg" alt="Close" className="w-full h-full" />
          </button>
        </div>
      </div>
      <ul className="h-[calc(100vh-200px)] w-full flex flex-col items-center justify-center space-y-12">
        {HEADER_TABS.map((header, idx) => {
          return (
            <li
              key={header.title}
              className="text-[18px] cursor-pointer flex flex-col items-center space-y-2"
            >
              <span className="text-primary">0{idx + 1}. </span>
              <a className="text-boldtext">{header.title}</a>
            </li>
          );
        })}
        <li key={'Resume'}>
          <PrimaryCTA
            onClick={handleCTAClick}
            bgStyle="w-[150px] h-[60px] rounded-lg"
            btnStyle="flex flex-row items-center justify-center text-[13px] text-primary bg-secondarybg border-primary border-[1px] rounded-lg"
          />
        </li>
      </ul>
    </motion.div>
  );
};

export default Drawer;
