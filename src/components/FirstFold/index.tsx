'use client';
import { motion } from 'framer-motion';
import { AnimatedLink } from '@/components/AnimatedLink';

export default function FirstFold() {
  // Variants for container (staggering children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 0.75, // Start this animation after 1s
      },
    },
  };

  // Variants for each child element
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Fade in from below
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
  return (
    <motion.section
      className="h-screen w-screen px-[24px] md:px-[140px] lg:px-[200px] flex flex-col justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.span
        className="text-primary text-[16px] mx-2 my-2 md:my-4"
        variants={itemVariants}
      >
        Hi, my name is
      </motion.span>
      <div className="font-[family-name:var(--font-inter)] flex flex-col">
        <motion.h1
          className="text-boldtext text-[40px] leading-[68px] md:text-[48px] md:leading-[50px] lg:text-[64px] lg:leading-[80px] font-bold"
          variants={itemVariants}
        >
          Sudipta Pradhan.
        </motion.h1>
        <motion.h2
          className="text-medium text-[40px] leading-[36px] md:text-[48px] md:leading-[44px] lg:text-[64px] lg:leading-[72px] font-bold"
          variants={itemVariants}
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          className="text-medium text-[16px] max-w-[540px] md:max-w-[740px] mt-5"
          variants={itemVariants}
        >
          I’m a software developer passionate about creating intuitive and
          visually engaging digital experiences. Currently, I’m contributing my
          skills at{' '}
          <AnimatedLink text={'Saathi'} href={'https://www.saathi.in/'} />, a
          profit-with-purpose startup dedicated to empowering grey- and
          blue-collar workforces through impactful training programs and
          meaningful job opportunities. I’m driven by the mission to build
          accessible and user-centered solutions that make a real difference in
          people’s lives.
        </motion.p>
      </div>
    </motion.section>
  );
}
