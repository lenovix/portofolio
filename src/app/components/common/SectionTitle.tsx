type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mb-10 text-center border-b pb-4 tracking-tight">
      {children}
    </h2>
  );
}