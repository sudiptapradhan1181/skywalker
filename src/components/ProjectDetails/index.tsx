type ProjectDetailsProps = {
  title: string;
  desc: string;
  tags: string[];
  alignRight?: boolean;
};

export default function ProjectDetails({
  title,
  desc,
  tags,
  alignRight = false,
}: ProjectDetailsProps) {
  return (
    <div
      className={`w-full flex items-center relative ${
        alignRight ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className="relative w-[65%] h-auto cursor-pointer">
        <div className="w-full h-full absolute z-2 top-0 left-0 bg-primary bg-opacity-70  hover:bg-opacity-0" />
        <img
          src="/images/bmc.webp"
          alt="BMC"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className={`absolute top-0 w-[50%] h-full flex flex-col justify-center ${
          alignRight ? 'text-left left-0' : 'text-right right-0'
        }`}
      >
        <span className="text-[13px] text-primary">Featured Project</span>
        <h3 className="font-[family-name:var(--font-inter)] text-boldtext text-[28px] font-bold">
          {title}
        </h3>
        <div className="font-[family-name:var(--font-inter)] text-[13px] text-medium font-medium w-full h-auto p-4 bg-secondarybg rounded-md my-4">
          {desc}
        </div>
        <div
          className={`flex flex-row items-center gap-4 text-medium text-[13px] ${
            alignRight ? 'justify-start' : 'justify-end'
          }`}
        >
          {tags?.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
