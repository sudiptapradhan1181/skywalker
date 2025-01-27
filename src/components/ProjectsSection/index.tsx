import ProjectDetails from '../ProjectDetails';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Math Companion',
      desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tags: ['NextJS', 'Tailwind', 'Tanstack-Query', 'NodeJS'],
    },
    {
      id: 2,
      title: 'Math Companion',
      desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tags: ['NextJS', 'Tailwind', 'Tanstack-Query', 'NodeJS'],
    },
  ];
  return (
    <section
      id="projects"
      className="h-screen w-screen px-[24px] md:px-[10vw] lg:px-[16vw] flex flex-col justify-center gap-10 items-center"
    >
      <h2 className="flex flex-row w-full items-center gap-4 mb-6">
        <span className="text-primary text-[22px] md:text-[26px] font-normal">
          02.
        </span>
        <span className="font-[family-name:var(--font-inter)] text-boldtext text-[26px] md:text-[32px] font-semibold whitespace-nowrap">
          Some Things I&apos;ve Built
        </span>
        <div className="h-[0.5px] bg-medium w-full" />
      </h2>
      {projects?.map((project, idx) => {
        return (
          <ProjectDetails
            key={project.id}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            alignRight={idx % 2 !== 0}
          />
        );
      })}
    </section>
  );
}
