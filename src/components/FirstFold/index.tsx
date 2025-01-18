import { AnimatedLink } from '@/components/AnimatedLink';

export default function FirstFold() {
    return (
        <section className="h-screen w-screen px-[200px] flex flex-col justify-center">
            <span className="text-primary text-[16px] mx-2 my-4">Hi, my name is</span>
            <div className="font-[family-name:var(--font-inter)] flex flex-col">
                <h1 className="text-boldtext text-[70px] leading-[80px] font-bold ">Sudipta Pradhan.</h1>
                <h2 className="text-medium text-[70px] leading-[72px] font-bold">I build things for the web.</h2>
                <p className="text-medium text-[16px] max-w-[740px] mt-5">
                    I’m a software developer passionate about creating intuitive and visually engaging digital experiences. Currently, I’m
                    contributing my skills at <AnimatedLink text={'Saathi'} href={'https://www.saathi.in/'} />, a profit-with-purpose
                    startup dedicated to empowering grey- and blue-collar workforces through impactful training programs and meaningful job
                    opportunities. I’m driven by the mission to build accessible and user-centered solutions that make a real difference in
                    people’s lives.
                </p>
            </div>
        </section>
    );
}
