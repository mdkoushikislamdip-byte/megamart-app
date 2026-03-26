import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow({ className, onClick }) {
  return (
    <div
      className={`hidden md:block ${className}cursor-pointer absolute top-1/2 -right-10 rounded-full -translate-y-1/2 w-20 h-20 bg-theme p-2.5`}
      onClick={onClick}
    >
      {" "}
      <div className="w-full h-full bg-[#f3f9fb] rounded-full flex items-center justify-center">
        <BiChevronRight className="w-10 h-10 text-brand" />
      </div>
    </div>
  );
}
function PrevArrow({ className, onClick }) {
  return (
    <div
      className={`hidden md:block ${className}cursor-pointer absolute top-1/2 -left-10 rounded-full -translate-y-1/2 z-40 w-20 h-20 bg-theme p-2.5`}
      onClick={onClick}
    >
      {" "}
      <div className="w-full h-full bg-[#f3f9fb] rounded-full flex items-center justify-center">
        <BiChevronLeft className="w-10 h-10 text-brand" />
      </div>
    </div>
  );
}

export { NextArrow, PrevArrow };
