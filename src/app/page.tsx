'use client';
import Drawer from '@/components/Drawer';
import FirstFold from '@/components/FirstFold';
import FixedInfo from '@/components/FixedInfo';
import Header from '@/components/Header';
import { SOCIAL_ICONS } from '@/constants';
import { useState } from 'react';

export default function Home() {
  const [isMwebMenuOpen, setIsMwebMenuOpen] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setIsMwebMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative font-[family-name:var(--font-fira-code)]">
      <Header setIsMwebMenuOpen={setIsMwebMenuOpen} />
      <FirstFold />
      <div className="hidden md:block fixed rotate-90 bottom-[130px] md:left-[-100px] lg:left-0">
        <FixedInfo icons={SOCIAL_ICONS} />
      </div>
      <div className="hidden md:block fixed rotate-90 bottom-[130px] md:right-[-100px] lg:right-0">
        <FixedInfo />
      </div>
      <Drawer isOpen={isMwebMenuOpen} toggleDrawer={handleToggleMenu} />
    </div>
  );
}
