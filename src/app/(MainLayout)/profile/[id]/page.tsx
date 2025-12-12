import ProfileWrapper from "@/components/module/Profile/Profile";
import { getMe } from "@/services/auth/getMe";
import { getSingleUser } from "@/services/user/user";
import { redirect } from "next/navigation";

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
  
  return <ProfileWrapper user={user} isOwner={user.email === me.email} />;
};

export default UserProfilePage;
