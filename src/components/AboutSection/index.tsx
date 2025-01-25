import { SKILLS_LIST } from '@/constants';
import AnimatedPhoto from '../AnimatedPhoto';
import { AnimatedLink } from '../AnimatedLink';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="h-screen w-screen px-[24px] px-[140px] flex flex-col justify-center items-center"
    >
      <div className="lg:w-[900px] flex flex-col justify-center">
        <h2 className="flex flex-row items-center gap-4">
          <span className="text-primary text-[26px] font-normal">01.</span>
          <span className="font-[family-name:var(--font-inter)] text-boldtext text-[32px] font-semibold whitespace-nowrap">
            About Me
          </span>
          <div className="h-[0.5px] bg-medium w-[300px]" />
        </h2>
        <div className="flex flex-row w-full justify-between">
          <div className="max-w-[60%] flex flex-col font-[family-name:var(--font-inter)]">
            <p className="text-medium text-[16px] mt-5">
              Hi, I’m Sudipta Pradhan, a Senior Software Developer specializing
              in frontend development with 4 years of experience building
              user-centric digital experiences. I’ve had the privilege of
              working with companies like{' '}
              <AnimatedLink
                text={'Newzera'}
                href={'https://in.linkedin.com/company/newzera'}
              />
              ,{' '}
              <AnimatedLink
                text={'Toppr'}
                href={'https://www.toppr.com/ask/'}
              />
              ,{' '}
              <AnimatedLink
                text={'Whitehat Jr'}
                href={'https://www.whitehatjr.com/'}
              />
              , and <AnimatedLink text={"Byju's"} href={'https://byjus.com/'} />
              , and I’m currently honing my skills at{' '}
              <AnimatedLink text={'Saathi'} href={'https://www.saathi.in/'} />.
            </p>
            <p className="text-medium text-[16px] mt-5">
              When I’m not writing clean, efficient code or optimizing web
              performance, you can find me immersed in a good book, shooting
              hoops on the basketball court, or exploring new destinations. My
              love for travel has inspired me to start a blog (coming soon!)
              where I plan to share my adventures and the lessons they bring.
            </p>
            <p className="text-medium text-[16px] mt-5">
              Whether it’s crafting intuitive interfaces or chasing sunsets, I’m
              driven by curiosity, creativity, and the thrill of building
              something meaningful. Let’s create something amazing together!
            </p>
            <p className="text-medium text-[16px] mt-5">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 mt-5">
              {SKILLS_LIST.map((skill) => {
                return (
                  <li
                    key={skill}
                    className="text-[13px] text-medium font-[family-name:var(--font-fira-code)] flex flex-row items-center gap-2"
                  >
                    <img
                      src="/icons/cornerDownRight.svg"
                      alt="Bullet"
                      className="w-3 h-3"
                    />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[30%] mt-[35px]">
            <AnimatedPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
