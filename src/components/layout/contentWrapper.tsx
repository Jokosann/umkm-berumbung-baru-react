export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl w-full mx-auto px-4 md:px-8">{children}</div>;
}
