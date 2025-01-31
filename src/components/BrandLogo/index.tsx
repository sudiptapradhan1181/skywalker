type BrandLogoProps = {
  handleClick?: () => void;
};

export default function BrandLogo({ handleClick }: BrandLogoProps) {
  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center w-[39px] h-[45px] bg-primary clip-hexagon cursor-pointer"
    >
      <div className="flex items-center justify-center w-[34px] h-[40px] bg-primarybg clip-hexagon">
        <span className="text-[20px] text-primary font-bold">S</span>
      </div>
    </div>
  );
}
