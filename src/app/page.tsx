'use client';
import FirstFold from '@/components/FirstFold';
import FixedInfo from '@/components/FixedInfo';
import Header from '@/components/Header';
import { SOCIAL_ICONS } from '@/constants';

export default function Home() {
  return (
    <div className="relative font-[family-name:var(--font-fira-code)]">
      <Header />
      <FirstFold />
      <div className="hidden md:block fixed rotate-90 bottom-[130px] md:left-[-100px] lg:left-0">
        <FixedInfo icons={SOCIAL_ICONS} />
      </div>
      <div className="hidden md:block fixed rotate-90 bottom-[130px] md:right-[-100px] lg:right-0">
        <FixedInfo />
      </div>
    </div>
  );
}
