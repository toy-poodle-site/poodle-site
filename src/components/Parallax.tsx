type ParallaxProps = {
  image: string;
  children: any;
};

export default function Parallax({ image, children }: ParallaxProps) {
  return (
    <div
      className="h-[500px] w-full relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className={`absolute inset-0 flex items-center p-5 bg-black/50`}>
        {children}
      </div>
    </div>
  );
}
