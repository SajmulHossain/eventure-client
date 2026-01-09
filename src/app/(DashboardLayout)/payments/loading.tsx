import { TableSkeleton } from "@/components/shared/skeletons";
import { CreditCard } from "lucide-react";

export default function PaymentsLoading() {
  return (
    <section className="page">
      <div className="container mx-auto py-10 px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <div className="h-8 bg-slate-200 rounded w-48 mb-2 animate-pulse" />
            <div className="h-4 bg-slate-200 rounded w-64 animate-pulse" />
          </div>
        </div>
        <TableSkeleton rows={8} cols={5} />
      </div>
    </section>
  );
}

