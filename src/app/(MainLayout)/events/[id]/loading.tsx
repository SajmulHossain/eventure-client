import { Card, CardContent } from "@/components/ui/card";

export default function EventDetailLoading() {
  return (
    <section className="page">
      <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
        <div className="h-[450px] w-full bg-slate-200 rounded-4xl mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="h-8 bg-slate-200 rounded w-48 mb-4" />
            <div className="h-4 bg-slate-200 rounded w-full mb-2" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card><CardContent className="p-5"><div className="h-20 bg-slate-200 rounded" /></CardContent></Card>
              <Card><CardContent className="p-5"><div className="h-20 bg-slate-200 rounded" /></CardContent></Card>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="p-8">
              <div className="h-32 bg-slate-200 rounded mb-4" />
              <div className="h-12 bg-slate-200 rounded" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

