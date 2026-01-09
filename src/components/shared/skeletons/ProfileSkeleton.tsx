import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 animate-pulse">
      <div className="relative h-[250px] md:h-[350px] w-full bg-slate-200" />

      <div className="container mx-auto px-4 md:px-6 relative -mt-20 z-10">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto" />
                <div className="space-y-2">
                  <div className="h-6 bg-slate-200 rounded w-32 mx-auto" />
                  <div className="h-4 bg-slate-200 rounded w-20 mx-auto" />
                  <div className="h-4 bg-slate-200 rounded w-48 mx-auto" />
                </div>
                <div className="h-5 bg-slate-200 rounded w-24 mx-auto" />
                <div className="h-10 bg-slate-200 rounded w-full" />
                <div className="h-px bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-32" />
                  <div className="h-4 bg-slate-200 rounded w-28" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="h-5 bg-slate-200 rounded w-20" />
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-6 bg-slate-200 rounded-full w-16" />
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 space-y-6 mt-6 lg:mt-20">
            <div className="flex gap-8 border-b border-slate-200">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-10 bg-slate-200 rounded w-24" />
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="border-0 shadow-md">
                  <div className="h-48 bg-slate-200" />
                  <CardContent className="p-5 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-20" />
                    <div className="h-5 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-200 rounded w-full" />
                    <div className="h-3 bg-slate-200 rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

