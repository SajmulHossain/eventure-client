import ProfileWrapper from "@/components/module/Profile/Profile";
import { getMe } from "@/services/auth/getMe";
import { getSingleUser } from "@/services/user/user";
import { redirect } from "next/navigation";
import {
  getHostedEventsByUserId,
  getEventsByUserId,
} from "@/services/events/getEventsByUserId";
import { getUserReviews } from "@/services/user/getUserReviews";

const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const user = await getSingleUser(id);
  const me = (await getMe()) || {};

  if (!user) {
    return redirect("/profile");
  }

  const isOwner = user.email === me.email;

  let hostedEvents: any[] = [];
  let joinedEvents: any[] = [];
  let reviews: any[] = [];

  if (user.role === "HOST") {
    hostedEvents = await getHostedEventsByUserId(user._id || id);
    reviews = await getUserReviews(user._id || id);
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

export default UserProfilePage;
