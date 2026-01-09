export const PageHeaderSkeleton = () => {
  return (
    <div className="mb-6 animate-pulse">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="h-8 bg-slate-200 rounded w-64 mb-2" />
          <div className="h-4 bg-slate-200 rounded w-96" />
        </div>
        <div className="h-6 bg-slate-200 rounded-full w-24" />
      </div>
    </div>
  );
};

