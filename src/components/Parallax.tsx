type ParallaxProps = {
  image: string;
  children: any;
  className?: string;
  innerClassName?: string;
};

export default function Parallax({
  image,
  children,
  className = '',
  innerClassName = '',
}: ParallaxProps) {
  return (
    <div
      className={`${className} w-full h-[500px] relative bg-fixed bg-cover bg-center `}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div
        className={`absolute inset-0 flex items-center p-5 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
