export default function Loading({ w, h }: { w: string; h: string }) {
  return (
    <div className={`${w} ${h} flex justify-center items-center`}>
      <span className="loading loading-dots loading-lg" />
    </div>
  );
}
