import Navbar from "@/components/shared/Navbar/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
  <Navbar />
    <main className="mt-28">{children}</main>
  </>
};

export default MainLayout;
