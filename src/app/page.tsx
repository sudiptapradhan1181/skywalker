'use client';
import AboutSection from '@/components/AboutSection';
import ContactUs from '@/components/ContactUs';
import Drawer from '@/components/Drawer';
import ExperienceSection from '@/components/ExperienceSection';
import FirstFold from '@/components/FirstFold';
import FixedInfo from '@/components/FixedInfo';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import { SOCIAL_ICONS } from '@/constants';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isMwebMenuOpen, setIsMwebMenuOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setIsMwebMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMwebMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMwebMenuOpen]);
  const handleToggleMenu = () => {
    setIsMwebMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative font-[family-name:var(--font-fira-code)] bg-primarybg">
      <Header setIsMwebMenuOpen={setIsMwebMenuOpen} />
      <FirstFold />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactUs />
      <div className="hidden md:block fixed rotate-90 bottom-[130px] md:left-[-100px] lg:left-0">
        <FixedInfo icons={SOCIAL_ICONS} />
      </div>
      <div className="hidden md:block fixed rotate-90 bottom-[130px] md:right-[-100px] lg:right-0">
        <FixedInfo />
      </div>
      <Drawer
        isOpen={isMwebMenuOpen}
        toggleDrawer={handleToggleMenu}
        ref={drawerRef}
      />
    </div>
  );
}
