'use client';
import { SOCIAL_ICONS } from '@/constants';
import PrimaryCTA from '../PrimaryCTA';

export default function ContactUs() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:spp11@iitbbs.ac.in';
  };
  return (
    <section
      id="contact"
      className="w-screen h-screen px-[24px] md:px-[10vw] lg:px-[16vw] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col max-w-[75%] items-center gap-4 mb-10">
        <span className="text-primary text-[14px] md:text-[18px] font-normal">
          04. What&apos;s Next?
        </span>
        <span className="font-[family-name:var(--font-inter)] text-boldtext text-[32px] md:text-[56px] font-semibold whitespace-nowrap">
          Get In Touch
        </span>
        <p className="font-[family-name:var(--font-inter)] text-medium text-[14px] md:text-[18px] text-center my-4">
          I&apos;m always excited to meet new people and explore fresh
          opportunities. Whether you want to discuss a potential collaboration,
          brainstorm innovative ideas, or just chat about the latest trends in
          technology and development, I&apos;d love to hear from you. Feel free
          to drop me a message—let&apos;s build something amazing together!
        </p>
        <PrimaryCTA
          text="Say Hello"
          onClick={handleEmailClick}
          bgStyle="w-[159px] h-[56px] bg-primary rounded-lg"
        />
        <div className="md:hidden flex flex-row mt-10 items-center justify-center gap-4">
          {SOCIAL_ICONS.map((icon) => {
            return (
              <a
                key={icon.url}
                href={icon.redirectUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon.url} alt={icon.alt} className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
