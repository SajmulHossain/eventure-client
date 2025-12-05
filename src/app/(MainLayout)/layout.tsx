import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
  <Navbar />
    <main className="mt-28">{children}</main>
    <Footer />
  </>
};

export default MainLayout;
