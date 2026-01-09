import { Suspense } from "react";
import ProfileWrapper from "@/components/module/Profile/Profile";
import { getMe } from "@/services/auth/getMe";
import { getSingleUser } from "@/services/user/user";
import { redirect } from "next/navigation";
import {
  getHostedEventsByUserId,
  getEventsByUserId,
} from "@/services/events/getEventsByUserId";
import { getUserReviews } from "@/services/user/getUserReviews";
import { ProfileSkeleton } from "@/components/shared/skeletons";

const UserProfileContent = async ({ id }: { id: string }) => {
  const [user, me] = await Promise.all([
    getSingleUser(id),
    getMe(),
  ]);

  if (!user) {
    redirect("/profile");
    return null;
  }

  const isOwner = user.email === me?.email;

  let hostedEvents: any[] = [];
  let joinedEvents: any[] = [];
  let reviews: any[] = [];

  if (user.role === "HOST") {
    [hostedEvents, reviews] = await Promise.all([
      getHostedEventsByUserId(user._id || id),
      getUserReviews(user._id || id),
    ]);
  } else if (user.role === "USER") {
    joinedEvents = await getEventsByUserId(user._id || id);
  }

  return (
    <ProfileWrapper
      user={user}
      isOwner={isOwner}
      hostedEvents={hostedEvents}
      joinedEvents={joinedEvents}
      reviews={reviews}
    />
  );
};

const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <UserProfileContent id={id} />
    </Suspense>
  );
};

export default UserProfilePage;
