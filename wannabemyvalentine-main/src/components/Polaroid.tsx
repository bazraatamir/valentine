import { ReactNode } from 'react';

type Props = {
  id: number;
  top: number;
  left: number;
  index: number;
  rotate: number;
  src: string;
  children: ReactNode;
};

const Polaroid = ({ top, left, index, rotate, src, children }: Props) => {
  const styles = {
    top: `${top}%`,
    left: `${left}%`,
    zIndex: index,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      className=" bg-white p-4 shadow-2xl absolute w-1/3 filter grayscale hover:filter-none hover:!scale-100 hover:!rotate-0 hover:transition-all duration-200 left-0 max-w-64 min-w-40"
      style={styles}
    >
      <img
        src={src}
        alt="Custom"
        className="max-w-full h-auto opacity-60 hover:opacity-[100%]"
      />
      <div className="md:text-2xl text-sm text-center leading-[2em]">
        {children}
      </div>
    </div>
  );
};
export default Polaroid;
