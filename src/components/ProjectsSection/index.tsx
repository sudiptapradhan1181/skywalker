import { PROJECT_DETAILS } from '@/constants';
import ProjectDetails from '../ProjectDetails';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="h-auto xs:h-screen px-[24px] md:px-[10vw] lg:px-[16vw] flex flex-col justify-center items-center mt-10 xs:mt-0"
    >
      <h2 className="flex flex-row w-full items-center gap-4 mb-10">
        <span className="text-primary text-[18px] md:text-[26px] font-normal">
          03.
        </span>
        <span className="font-[family-name:var(--font-inter)] text-boldtext text-[22px] md:text-[32px] font-semibold whitespace-nowrap">
          Some Things I&apos;ve Built
        </span>
        <div className="h-[0.5px] bg-medium w-full" />
      </h2>
      <div className="w-full flex flex-col relative">
        {PROJECT_DETAILS?.map((project, idx) => {
          return (
            <ProjectDetails
              key={project.id}
              title={project.title}
              desc={project.desc}
              imgSrc={project.imgSrc}
              href={project.href}
              tags={project.tags}
              alignRight={idx % 2 !== 0}
            />
          );
        })}
      </div>
    </section>
  );
}
