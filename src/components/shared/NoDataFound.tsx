"use client";

import { Search, XCircle } from "lucide-react";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-6 text-center bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200 animate-in fade-in zoom-in-95 duration-500">
      <div className="relative mb-6 group">
        <div className="absolute inset-0 bg-indigo-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
        <div className="relative bg-white p-5 rounded-2xl shadow-sm ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Search className="w-10 h-10 text-slate-400 group-hover:text-indigo-500 transition-colors duration-300" />

          <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-sm ring-1 ring-slate-100">
            <XCircle className="w-4 h-4 text-red-400 fill-red-50" />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
        No data found
      </h3>

      <p className="text-slate-500 text-sm md:text-base max-w-[400px] mb-8 leading-relaxed">
        We couldn&apos;t find anything matching your criteria. Try adjusting
        your filters.
      </p>
    </div>
  );
};

export default NoDataFound;