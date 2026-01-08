import { IUser } from "@/types";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getMe } from "@/services/auth/getMe";
import { getNavByRoles } from "@/lib/getSidebarNav";

const DashboardNavbar = async () => {
  const user = (await getMe()) as IUser;
  const navItems = getNavByRoles(user?.role);

  return (
    <DashboardNavbarContent
      userInfo={user}
      navItems={navItems}
    />
  );
};

export default DashboardNavbar;
