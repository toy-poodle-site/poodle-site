export default function BlurbsContainer({ children }: any) {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:mt-10">
      {children}
    </div>
  );
}
