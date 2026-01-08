import { getNavByRoles } from "@/lib/getSidebarNav";
import { getMe } from "@/services/auth/getMe";
import { IUser, NavSection } from "@/types";
import DashboardSidebarContent from "./DashboardSidebarContent";

const DashboardSidebar = async () => {
  const userInfo = (await getMe()) || {} as IUser;

  const navItems: NavSection[] = getNavByRoles(userInfo?.role);

  return <DashboardSidebarContent userInfo={userInfo} navItems={navItems} />;
};

export default DashboardSidebar;