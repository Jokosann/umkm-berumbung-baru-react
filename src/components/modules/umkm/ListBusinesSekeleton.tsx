export default function ListBusinesSkeleton() {
  return (
    <div className="w-full h-52 grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 lg:grid-cols-4 my-6">
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-52 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-52 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-52 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-52 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
  );
}
