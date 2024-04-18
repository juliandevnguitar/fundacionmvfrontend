


export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="max-w-[1080px] flex flex-col items-center w-full">
        {children}
     </div>
    );
  }
  