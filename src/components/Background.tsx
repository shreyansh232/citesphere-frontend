export const Background: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(250,204,21,0.3),rgba(255,255,255,0))]">
      {/* Background grid */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Content container */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
