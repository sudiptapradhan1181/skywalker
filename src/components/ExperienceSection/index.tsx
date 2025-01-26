'use client';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import HorizontalTabsWithMarker from '../HorizontalTabsWithMarker';
import VerticalTabsWithMarker from '../VerticalTabsWithMarker';

export default function ExperienceSection() {
  const isDesktop = useIsDesktop();
  return (
    <section
      id="experience"
      className="h-screen w-screen px-[24px] md:px-[10vw] lg:px-[16vw] flex flex-col pt-[20%] items-center"
    >
      <h2 className="flex flex-row w-full items-center gap-4">
        <span className="text-primary text-[22px] md:text-[26px] font-normal">
          02.
        </span>
        <span className="font-[family-name:var(--font-inter)] text-boldtext text-[26px] md:text-[32px] font-semibold whitespace-nowrap">
          Where I&apos;ve Worked
        </span>
        <div className="h-[0.5px] bg-medium w-full" />
      </h2>
      {isDesktop ? <VerticalTabsWithMarker /> : <HorizontalTabsWithMarker />}
    </section>
  );
}
