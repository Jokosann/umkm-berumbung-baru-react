export default function LoadingGalleryPage() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="skeleton w-full aspect-[4/3]" />
    </div>
  );
}
