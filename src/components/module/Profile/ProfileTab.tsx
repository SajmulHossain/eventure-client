import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/types";
import { ProfileTabsContent } from "./ProfileTabsContent";
import { IEvent } from "@/types";
import { IReview } from "@/services/user/getUserReviews";

interface ProfileTabProps {
  role: UserRole;
  hostedEvents: IEvent[];
  joinedEvents: IEvent[];
  reviews: IReview[];
  bio?: string;
  userId?: string;
  isOwner: boolean;
}

const ProfileTab = ({
  role,
  hostedEvents,
  joinedEvents,
  reviews,
  bio,
  userId,
  isOwner,
}: ProfileTabProps) => {
  const getTabsForRole = () => {
    if (role === "HOST") {
      return [
        { value: "hosted", label: "Hosted Events" },
        { value: "about", label: "About" },
        { value: "reviews", label: "Reviews" },
      ];
    } else if (role === "USER") {
      return [
        { value: "joined", label: "Joined Events" },
        { value: "about", label: "About" },
      ];
    } else {
      return [{ value: "about", label: "About" }];
    }
  };

  const tabs = getTabsForRole();
  const defaultTab = tabs[0]?.value || "about";

  return (
    <div className="lg:col-span-8 xl:col-span-9 space-y-6 mt-6 lg:mt-20">
      <div className="flex items-center justify-between">
        <div className="flex gap-8 border-b border-slate-200 w-full">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="bg-transparent h-auto p-0 gap-6">
              {tabs.map(({ label, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-indigo-600 data-[state=active]:text-indigo-600 rounded-none px-0 text-slate-500 font-medium text-base"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            <ProfileTabsContent
              role={role}
              hostedEvents={hostedEvents}
              joinedEvents={joinedEvents}
              reviews={reviews}
              bio={bio}
              userId={userId}
              isOwner={isOwner}
            />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
