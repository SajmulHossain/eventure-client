import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constant/profileTabs";
import GetTabs from "./GetTabs";

const ProfileTab = () => {
  return (
    <div className="lg:col-span-8 xl:col-span-9 space-y-6 mt-6 lg:mt-20">
      <div className="flex items-center justify-between">
        <div className="flex gap-8 border-b border-slate-200 w-full">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="bg-transparent h-auto p-0 gap-6">
              {profileTabs.map(({ label, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-indigo-600 data-[state=active]:text-indigo-600 rounded-none px-0 text-slate-500 font-medium text-base"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            <GetTabs />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
