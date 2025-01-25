'use client';

export default function AnimatedPhoto() {
  return (
    <div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border-primary border-[1px] rounded-lg bg-transparent transform transition-transform duration-200 hover:translate-x-[5px] hover:translate-y-[5px]">
      <div className="absolute top-[-15px] left-[-15px] z-5 w-full h-full rounded-lg transform transition-transform duration-200 hover:translate-x-[-10px] hover:translate-y-[-10px]">
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-0 rounded-lg" />
        <img
          src="/images/sudipta.webp"
          alt="Sudipta Pradhan"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
