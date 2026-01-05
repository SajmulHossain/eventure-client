import { Card } from "@/components/ui/card";
import { getEventTypes } from "@/services/events/get-event-types";

const gradientClasses = [
  "from-indigo-500 via-sky-500 to-cyan-400",
  "from-emerald-500 via-teal-500 to-cyan-400",
  "from-rose-500 via-pink-500 to-fuchsia-500",
  "from-amber-500 via-orange-500 to-rose-500",
  "from-slate-700 via-slate-600 to-slate-500",
  "from-violet-500 via-purple-500 to-indigo-500",
];

const Types = async () => {
  const types = await getEventTypes();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Categories
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Browse by category
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Discover events tailored to your interests. Pick a category to
              explore experiences you&apos;ll love.
            </p>
          </div>

          {types && types.length > 0 && (
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span>{types.length} categories available</span>
            </div>
          )}
        </div>

        {(!types || types.length === 0) && (
          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/60 text-center">
            <p className="text-sm font-medium text-slate-700">
              No categories found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Categories will appear here once created by the admin.
            </p>
          </div>
        )}

        {types && types.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {types.map((type, idx) => {
              const gradient = gradientClasses[idx % gradientClasses.length];

              return (
                <Card
                  key={type._id || idx}
                  className="group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-900/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-3 text-center">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white shadow-sm backdrop-blur">
                      {type.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="line-clamp-1 text-sm font-semibold text-white md:text-base">
                      {type.name}
                    </h3>
                    <p className="mt-1 line-clamp-3 text-[11px] font-medium text-white/80 md:text-xs">
                      {type.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Types;