import ProfileWrapper from "@/components/module/Profile/Profile";
import { getMe } from "@/services/auth/getMe";
import { IUser } from "@/types";

const Profile = async () => {
  const user = (await getMe()) || ({} as IUser);

  return <ProfileWrapper isOwner user={user} />;
};

export default Profile;
