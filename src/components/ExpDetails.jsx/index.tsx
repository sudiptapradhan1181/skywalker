type ExpDetailsProps = {
  title: string;
  company: string;
  date: string;
  details: string[];
};

export default function ExpDetails({
  title,
  company,
  date,
  details,
}: ExpDetailsProps) {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-row text-[18px] md:text-[22px] gap-1 md:gap-2 font-[family-name:var(--font-inter)] font-medium">
          <span className="text-boldtext">{title}</span>
          <span className="text-primary">@ {company}</span>
        </div>
        <span className="text-medium te-[11px] md:text-[13px] mt-2">
          {date}
        </span>
        <ul className="font-[family-name:var(--font-inter)] mt-4 space-y-4">
          {details.map((detail, index) => {
            return (
              <li key={index} className="flex flex-row gap-2">
                <img
                  src="/icons/cornerDownRight.svg"
                  alt="Bullet"
                  className="w-3 h-3 mt-1"
                />
                <span>{detail}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
