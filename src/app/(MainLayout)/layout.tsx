import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col justify-between min-h-screen">
  <Navbar />
    <main className="mt-28">{children}</main>
    <Footer />
  </div>
};

export default MainLayout;
