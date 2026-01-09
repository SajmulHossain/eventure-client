import { Suspense } from "react";
import ProfileWrapper from "@/components/module/Profile/Profile";
import { getMe } from "@/services/auth/getMe";
import { IUser } from "@/types";
import hostedEvents from "@/services/events/hostedEvents";
import getMyEvents from "@/services/events/getMyEvents";
import { getUserReviews } from "@/services/user/getUserReviews";
import { ProfileSkeleton } from "@/components/shared/skeletons";

const ProfileContent = async () => {
  const user = (await getMe()) || ({} as IUser);

  if (!user._id) {
    return null;
  }

  let hostedEventsList: any[] = [];
  let joinedEventsList: any[] = [];
  let reviews: any[] = [];

  if (user.role === "HOST") {
    [hostedEventsList, reviews] = await Promise.all([
      hostedEvents(),
      getUserReviews(user._id),
    ]);
  } else if (user.role === "USER") {
    joinedEventsList = await getMyEvents();
  }

  return (
    <ProfileWrapper
      user={user}
      isOwner={true}
      hostedEvents={hostedEventsList}
      joinedEvents={joinedEventsList}
      reviews={reviews}
    />
  );
};

const Profile = () => {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileContent />
    </Suspense>
  );
};

export default Profile;
